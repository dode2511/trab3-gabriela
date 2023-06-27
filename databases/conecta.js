import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  "teste", "root", "dode2511", {
  dialect: "mysql",
  host: "localhost",
  port: 3406
});