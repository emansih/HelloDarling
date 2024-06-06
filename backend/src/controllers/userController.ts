import { Request, Response } from 'express';
import User from '../models/user';
import UserAvailabilities from '../models/user_availabilities';
import { Op } from 'sequelize';
import UserDates from '../models/user_dates';
import DietaryRestrictions from '../models/dietary_restrictions';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'An error occurred while fetching users' });
  }
};

export const getUserAvilability = async(req: Request, res: Response) => {
  const userId = req.params.id
  try {
    const usersAvailabilities = await UserAvailabilities.findAll({
      where: {
        userId: { 
          [Op.eq]: userId,
        }
      }
    })
    res.status(200).json(usersAvailabilities);
  } catch(error) {
    console.error('Error fetching user '.concat(userId), error);
    res.status(500).json({ error: 'An error occurred while fetching user availability' });
  }
}


export const setUserDates = async(req: Request, res: Response) => {
  try {
    const requestBody = req.body;
    const dateStart: string = requestBody.dateStart;
    const dateEnd: string = requestBody.dateEnd;
    const daterOneId: number = requestBody.daterOne;
    const daterTwoId: number = requestBody.daterTwo;
    const dateLocation: string = requestBody.dateLocation;
    const dayOfWeekName = getDayName(dateStart);
    
    const isDateOneAvailableOnDay: Boolean = await isDateAvailableOnDay(daterOneId, dayOfWeekName);
    if(!isDateOneAvailableOnDay){
      res.status(403).json({"message": "Date One is not available on ".concat(dayOfWeekName)})
      return;
    }

    const isDateTwoAvailableOnDay: Boolean = await isDateAvailableOnDay(daterTwoId, dayOfWeekName);
    if(!isDateTwoAvailableOnDay){
      res.status(403).json({"message": "Date Two is not available on ".concat(dayOfWeekName)})
      return;
    }

    const isDateOneAvailbleOnDate: Boolean = await isDateBookedInTheRange(dateStart, dateEnd, daterOneId);
    if(!isDateOneAvailbleOnDate){
      res.status(403).json({"message": "Date One is not available between ".concat(dateStart).concat(" and ").concat(dateEnd)})
      return;
    }

    const isDateTwoAvailbleOnDate: Boolean = await isDateBookedInTheRange(dateStart, dateEnd, daterOneId);
    if(!isDateTwoAvailbleOnDate){
      res.status(403).json({"message": "Date Two is not available between ".concat(dateStart).concat(" and ").concat(dateEnd)})
      return;
    }

    UserDates.create({ daterOneId: daterOneId, daterTwoId: daterTwoId , dateLocation: dateLocation, dateStart: dateStart, dateEnd: dateEnd }).then(() => {
      res.status(200).json({"message": "Date successfully saved! "})
    })
  } catch(error) {
    console.log(error)
    res.status(500).json({ error: 'An error occurred while booking user\'s date' });
  }
}


export const getUserDates = async(req: Request, res: Response) => {
  const userId = req.params.id
  try {
    const userAsDaterOne = await UserDates.findAll({
      where: {
        daterOneId: { 
          [Op.eq]: userId,
        }
      }
    })
    const userAsDaterTwo = await UserDates.findAll({
      where: {
        daterTwoId: { 
          [Op.eq]: userId,
        }
      }
    })

    const combinedDates = [...userAsDaterOne, ...userAsDaterTwo];

    res.status(200).json(combinedDates);
  } catch(error) {
    console.error('Error fetching user '.concat(userId), error);
    res.status(500).json({ error: 'An error occurred while fetching user dates' });
  }

}

export const getUserDietaryRestrictions = async(req: Request, res: Response) => {
  const userId = req.params.id
  try {
    const userDietaryRestrictions = await DietaryRestrictions.findAll({
      where: {
        userId: { 
          [Op.eq]: userId,
        }
      }
    })
    res.status(200).json(userDietaryRestrictions);
  } catch(error) {
    console.error('Error fetching user '.concat(userId), error);
    res.status(500).json({ error: 'An error occurred while fetching user dietary restrictions' });
  }

}


async function isDateAvailableOnDay(userId: number, dayOfWeek: string): Promise<Boolean> {
  const usersAvailabilities = await UserAvailabilities.findAll({
    where: {
      userId: { 
        [Op.eq]: userId
      },
      dayAvailable: {
        [Op.eq]: dayOfWeek
      }
    }
  })
  if(usersAvailabilities.length == 0){
    return true
  } else {
    return false
  }
}


async function isDateBookedInTheRange(dateStart: string, dateEnd: string, userId: number): Promise<Boolean>  {
  const userDates = await UserDates.findAll({
    where: {
      dateStart: {
        [Op.gte]: dateStart
      },
      dateEnd: {
        [Op.gte]: dateEnd
      },
      userDatesId: {
        [Op.eq]: userId
      }
    }
  })
  console.log(userDates)
  if(userDates.length > 0){
    return false
  } else {
    return true
  }
}

function getDayName(dateStr: string){
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-AU", { weekday: 'long' });        
}
