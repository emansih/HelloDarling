import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../repository';
import User from './user'


interface DietaryRestrictionsAttributes {
  dietaryRestrictionId: number;
  userId: number;
  dietRetrictions: string;
}

interface DietaryRestrictionsCreationAttributes extends Optional<DietaryRestrictionsAttributes, 'dietaryRestrictionId'> {}


class DietaryRestrictions extends Model<DietaryRestrictionsAttributes, DietaryRestrictionsCreationAttributes> implements DietaryRestrictionsAttributes {
  public dietaryRestrictionId!: number;
  public userId!: number;
  public dietRetrictions!: string;
  
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
  
DietaryRestrictions.init({
  dietaryRestrictionId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'userId'
    }
  },
  dietRetrictions: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
}, {
  sequelize: sequelize,
  tableName: 'dietary_restrictions',
  freezeTableName: true
});

export default DietaryRestrictions;
