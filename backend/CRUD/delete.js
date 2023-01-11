const { User } = require("../models");

User.destroy(
  //{ attributes: ["Firstname", "lastName"] } ==> ini digunakan jika hanya mengambil beberpa kolom
  //{ where: { id: 2 } } ==> ini digunakan jika hanya menggunakan 'where'
  { where: { id: 3 } }
)
  .then((result) => {
    console.log("Delete Berhasil");
  })
  .catch((err) => {
    console.log("Delete Gagal");
  });
