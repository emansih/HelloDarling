
import User from './models/user';
import DietaryRestrictions from './models/dietary_restrictions';
import UserAvailabilities, { Availability } from './models/user_availabilities';
import UserDates from './models/user_dates';

const isDevelopment = true;


export function seedData(){
    try {
        // Use force: true for development to drop and recreate tables
        User.sync({force: isDevelopment}).then(() => {
          User.create({ firstName: 'Alice', lastName: 'Smith', userGender: 'Female', userPostCode: 1020 });
          User.create({ firstName: 'Bob', lastName: 'Johnson', userGender: 'Male', userPostCode: 2045 });
          User.create({ firstName: 'Charlie', lastName: 'Brown', userGender: 'Male', userPostCode: 3100 });
          User.create({ firstName: 'Diana', lastName: 'Evans', userGender: 'Female', userPostCode: 4135 });
          User.create({ firstName: 'Edward', lastName: 'Green', userGender: 'Male', userPostCode: 5210 });
          User.create({ firstName: 'Fiona', lastName: 'Hill', userGender: 'Female', userPostCode: 6070 });
          User.create({ firstName: 'George', lastName: 'Adams', userGender: 'Male', userPostCode: 7200 });
          User.create({ firstName: 'Hannah', lastName: 'White', userGender: 'Female', userPostCode: 8350 });
          User.create({ firstName: 'Ian', lastName: 'Black', userGender: 'Male', userPostCode: 9001 });
          User.create({ firstName: 'Julia', lastName: 'Clark', userGender: 'Female', userPostCode: 1045 });
          DietaryRestrictions.sync({force: isDevelopment}).then(() => {
            DietaryRestrictions.create({ userId: 1, dietRetrictions: "Chicken" });
            DietaryRestrictions.create({ userId: 1, dietRetrictions: "Fish" });
            DietaryRestrictions.create({ userId: 1, dietRetrictions: "Pork" });
            DietaryRestrictions.create({ userId: 1, dietRetrictions: "Duck" });
            DietaryRestrictions.create({ userId: 1, dietRetrictions: "Prawn" });
            DietaryRestrictions.create({ userId: 4, dietRetrictions: "Pork" });
            DietaryRestrictions.create({ userId: 5, dietRetrictions: "Seafood" });
            DietaryRestrictions.create({ userId: 5, dietRetrictions: "Chicken" });
          })
          UserAvailabilities.sync({ force: isDevelopment}).then(() => {
            UserAvailabilities.create({ userId: 1, dayAvailable: Availability.MONDAY });
            UserAvailabilities.create({ userId: 1, dayAvailable: Availability.WEDNESDAY });
            
            UserAvailabilities.create({ userId: 2, dayAvailable: Availability.TUESDAY });
            UserAvailabilities.create({ userId: 2, dayAvailable: Availability.THURSDAY });
            UserAvailabilities.create({ userId: 2, dayAvailable: Availability.SATURDAY });
            
            UserAvailabilities.create({ userId: 3, dayAvailable: Availability.TUESDAY });
            UserAvailabilities.create({ userId: 3, dayAvailable: Availability.THURSDAY });
            UserAvailabilities.create({ userId: 3, dayAvailable: Availability.FRIDAY });
            UserAvailabilities.create({ userId: 3, dayAvailable: Availability.SUNDAY });
            
            UserAvailabilities.create({ userId: 4, dayAvailable: Availability.MONDAY });
            UserAvailabilities.create({ userId: 4, dayAvailable: Availability.THURSDAY });
            UserAvailabilities.create({ userId: 4, dayAvailable: Availability.SUNDAY });
            
            UserAvailabilities.create({ userId: 5, dayAvailable: Availability.WEDNESDAY });
            
            UserAvailabilities.create({ userId: 6, dayAvailable: Availability.FRIDAY });
            UserAvailabilities.create({ userId: 6, dayAvailable: Availability.SATURDAY });
            
            UserAvailabilities.create({ userId: 7, dayAvailable: Availability.SUNDAY });
            UserAvailabilities.create({ userId: 7, dayAvailable: Availability.MONDAY });
            UserAvailabilities.create({ userId: 7, dayAvailable: Availability.TUESDAY });
            UserAvailabilities.create({ userId: 7, dayAvailable: Availability.WEDNESDAY });
            UserAvailabilities.create({ userId: 7, dayAvailable: Availability.THURSDAY });
            
            UserAvailabilities.create({ userId: 8, dayAvailable: Availability.TUESDAY });
            UserAvailabilities.create({ userId: 8, dayAvailable: Availability.WEDNESDAY });
            
            UserAvailabilities.create({ userId: 9, dayAvailable: Availability.THURSDAY });
            UserAvailabilities.create({ userId: 9, dayAvailable: Availability.FRIDAY });
            UserAvailabilities.create({ userId: 9, dayAvailable: Availability.SATURDAY });
            UserAvailabilities.create({ userId: 9, dayAvailable: Availability.SUNDAY });
    
            UserAvailabilities.create({ userId: 10, dayAvailable: Availability.MONDAY });
            UserAvailabilities.create({ userId: 10, dayAvailable: Availability.TUESDAY });
            UserAvailabilities.create({ userId: 10, dayAvailable: Availability.WEDNESDAY });
            UserAvailabilities.create({ userId: 10, dayAvailable: Availability.THURSDAY });
            UserAvailabilities.create({ userId: 10, dayAvailable: Availability.FRIDAY });
            UserAvailabilities.create({ userId: 10, dayAvailable: Availability.SATURDAY });
            UserAvailabilities.create({ userId: 10, dayAvailable: Availability.SUNDAY });
            
          })
    
          UserDates.sync({force: isDevelopment})
        });
    } catch (error) {
      console.error("Error synchronizing the database:", error);
    }
}

export default seedData;
  

