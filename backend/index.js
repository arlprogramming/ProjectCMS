const { Sequelize } = require("sequelize");
const { QueryTypes } = require("sequelize");

const sequelize = new Sequelize("DB_MEDICAL", "appims", "P4ssw0rd", {
  host: "PRAISINDO",
  dialect: "mssql",
});

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    const results = await sequelize.query("SELECT * FROM TB_M_DOCTOR", {
      type: QueryTypes.SELECT,
    });

    console.log(results);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
