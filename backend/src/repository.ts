import { Sequelize } from 'sequelize';
import { DB_URL } from './config'
const sequelize = new Sequelize(DB_URL);

export default sequelize;


