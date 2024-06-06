import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../repository';
import UserAvailabilities from './user_availabilities';

interface UserAttributes {
  userId: number;
  firstName: string;
  lastName: string;
  userGender: string;
  userPostCode: number;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'userId'> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public userId!: number;
  public firstName!: string;
  public lastName!: string;
  public userGender!: string;
  public userPostCode!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init({
  userId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  userGender: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  userPostCode: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: sequelize,
  tableName: 'user',
  freezeTableName: true
});


export default User;
