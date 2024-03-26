const sequelize = require("sequelize");
const db = new sequelize(
  process.env.POSTGRES_DB_DATABASE,
  process.env.POSTGRES_DB_USERNAME,
  process.env.POSTGRES_DB_PASSWORD,
    {
        host: '192.168.2.12',
        dialect: 'postgres',
    }, {logging: 'console.log'}
);

const test = async() => {
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
test()

const createTable = async() => {
  try {
      await db.sync({alter : true});
      console.log('Models synchronized successfully.');
    } catch (error) {
      console.error('Error synchronizing models:', error);
    }
  }
  createTable()

  
module.exports = db;
