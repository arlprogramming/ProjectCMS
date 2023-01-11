import React from "react";
import { doc, setDoc } from "firebase/firestore";
import { fireStore } from "../../Config/firebaseConfig";
import ListEmployee from "../ListEmployee/listEmployee";

export default function AddEmployee() {
  const handleSubmit = (e) => {
    //alert("haloo");
    e.preventDefault();

    let namalengkap = e.target.namalengkap.value;
    let nik = e.target.nik.value;
    let alamat = e.target.alamat.value;

    console.info({ namalengkap, nik, alamat });

    let addEmployeeRef = doc(fireStore, "dataEmployee", Date.now().toString());

    setDoc(addEmployeeRef, {
      id: Date.now(),
      namalengkap: namalengkap,
      nik: nik,
      alamat: alamat,
      createdAt: Date.now().format("dd-MM-yyy"),
      createdBy: "Rully",
    })
      .then((res) => {
        console.info("Data berhasil disimpan rul...");
      })
      .catch((err) => {
        console.error(err);
      });

    e.target.namalengkap.value = "";
    e.target.nik.value = "";
    e.target.alamat.value = "";
  };
  return (
    <div>
      <form
        className="w-[500px] p-6 flex flex-col gap-4"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className="flex gap-2 justify-between items-center">
          <label htmlFor="namalengkap">Full Name</label>
          <input
            type="text"
            className="h-10 px-3 border-[1px] border-gray-300 rounded-md w-[250px]"
            id="namalengkap"
          />
        </div>

        <div className="flex gap-2 justify-between items-center flex-row">
          <label htmlFor="nik">NIK</label>
          <input
            type="text"
            className="h-10 px-3 border-[1px] border-gray-300 rounded-md w-[250px]"
            id="nik"
          />
        </div>

        <div className="flex gap-2x justify-between items-start">
          <label htmlFor="alamat">Alamat</label>
          <textarea
            type="text"
            className="h-[200px] p-3 border-[1px] border-gray-300 rounded-md w-[250px]"
            id="alamat"
          />
        </div>

        <div className="flex mt-4 gap-2 ml-auto">
          <button
            type="reset"
            className="h-10 w-[120px] bg-gray-400 text-white rounded-md"
          >
            Reset
          </button>
          <button
            type="submit"
            className="h-10 w-[120px] bg-orange-500 text-white rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
      <ListEmployee />
    </div>
  );
}
