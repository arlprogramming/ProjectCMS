const { User } = require("../models");

User.findAll(
  //{ attributes: ["Firstname", "lastName"] } ==> ini digunakan jika hanya mengambil beberpa kolom
  //{ where: { id: 2 } } ==> ini digunakan jika hanya menggunakan 'where'
  { where: { id: 2 } }
)
  .then((result) => {
    // console.log(result);
    result.forEach((data) => {
      console.log(`ID : ${data.id}`);
      console.log(`Firstname : ${data.firstName}`);
      console.log(`LastName : ${data.lastName}`);
      console.log(`Email : ${data.email}`);
      console.log(`==============================================`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
