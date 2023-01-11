const { User } = require("../models");

const data = {
  firstName: "Jenny",
  lastName: "Doe",
  email: "jenny@arlcmsapp.com",
};

User.update(data, { where: { id: 2 } })
  .then((result) => {
    console.log("Sukses Update");
  })
  .catch((err) => {
    console.log("Gagal Update");
  });
