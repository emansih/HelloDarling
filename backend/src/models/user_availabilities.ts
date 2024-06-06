import { DataTypes, Optional, Model } from 'sequelize';
import sequelize from '../repository';
import User from './user'

export enum Availability {
    MONDAY = 'Monday',
    TUESDAY = 'Tuesday',
    WEDNESDAY = 'Wednesday',
    THURSDAY = 'Thursday',
    FRIDAY = 'Friday',
    SATURDAY = 'Saturday',
    SUNDAY = 'Sunday',
}


interface UserAvailabilitiesAttributes {
    userAvailabilityId: number;
    userId: number;
    dayAvailable: Availability;
}


interface UserAvailabilitiesCreationAttributes extends Optional<UserAvailabilitiesAttributes, 'userAvailabilityId'> {}

class UserAvailabilities extends Model<UserAvailabilitiesAttributes, UserAvailabilitiesCreationAttributes> implements UserAvailabilitiesAttributes {

    public userAvailabilityId!: number;
    public userId!: number;
    public dayAvailable!: Availability;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

UserAvailabilities.init({
    userAvailabilityId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'userId'
      }
    },
    dayAvailable: {
        type: DataTypes.ENUM(...Object.values(Availability)),
        allowNull: false
    }
}, {
    sequelize: sequelize,
    tableName: 'user_availabilities',
    freezeTableName: true
})


    

export default UserAvailabilities;