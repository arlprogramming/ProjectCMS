const { User } = require("./models");

const data = {
  firstName: "Budi",
  lastName: "Setiawan",
  email: "budi@arlcmsapp.com",
};

User.create(data)
  .then((result) => {
    console.log("Sukses");
  })
  .catch((err) => {
    console.log("Gagal Inser");
  });
