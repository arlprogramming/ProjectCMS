import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = db.define(
  "Users",
  {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    // createdAt: DataTypes.DATE,
    // updateAt: DataTypes.DATE,
  },
  {
    freezeTableName: true,
  }
);

export default User;

//membuat function untuk generate table
(async () => {
  await db.sync();
})();
