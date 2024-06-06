import { DataTypes, Optional, Model } from 'sequelize';
import sequelize from '../repository';
import User from './user'

interface UserDatesAttributes {
    userDatesId: number;
    daterOneId: number;
    daterTwoId: number;
    dateLocation: string;
    dateStart: string;
    dateEnd: string;
}

interface UserDatesCreationAttributes extends Optional<UserDatesAttributes, 'userDatesId'> {}


class UserDates extends Model<UserDatesAttributes, UserDatesCreationAttributes> implements UserDatesAttributes {

    public userDatesId!: number;
    public daterOneId!: number;
    public daterTwoId!: number;
    public dateLocation!: string;
    public dateStart!: string;
    public dateEnd!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

UserDates.init({
    userDatesId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    daterOneId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'userId'
      }
    },
    daterTwoId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'userId'
      }
    },
    dateLocation: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    dateStart: {
        type: DataTypes.DATE,
        allowNull: false
    }, 
    dateEnd: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize: sequelize,
    tableName: 'user_dates',
    freezeTableName: true
 
})

export default UserDates;