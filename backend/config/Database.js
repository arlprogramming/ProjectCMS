import { Sequelize } from "sequelize";

const db = new Sequelize("DB_MEDICAL", "appims", "P4ssw0rd", {
  host: "PRAISINDO",
  dialect: "mssql",
});

export default db;

// import { Sequelize } from "sequelize";

// const db = new Sequelize("crud_db", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
// });

// export default db;
