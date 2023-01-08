import { React, useState, useEffect } from "react";
import { fireStore } from "../../Config/firebaseConfig";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import moment from "moment";

export default function ListEmployee() {
  //State
  const [dataEmployee, setDataEmployee] = useState([]);

  //get data from firebase
  const getDataEmployee = async () => {
    let arrDataEmployee = [];

    let dataEmployeeRef = await collection(fireStore, "dataEmployee");

    const result = await getDocs(dataEmployeeRef).then((res) => {
      res.forEach((e) => {
        arrDataEmployee.push(e.data());
      });
    });

    return arrDataEmployee;
  };

  //listener function
  const listener = () => {
    let dataEmployeeRef = collection(fireStore, "dataEmployee");
    onSnapshot(dataEmployeeRef, (newRec) => {
      console.info("masuk rull...");
      getDataEmployee()
        .then((res) => {
          //console.info(res);
          setDataEmployee(res);
          //console.log(dataEmployee);
        })
        .catch((err) => {
          console.error(err);
        });
    });
  };

  //clc
  useEffect(() => {
    getDataEmployee()
      .then((res) => {
        //console.info(res);
        setDataEmployee(res);
        //console.log(dataEmployee);
      })
      .catch((err) => {
        console.error(err);
      });

    //comp did update
    return () => {
      listener();
    };
  }, []);
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-2xl">List employee</h1>
      <table className="w-full mt-4 text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>NIK</th>
            <th>Address</th>
            <th>Create By</th>
            <th>Create At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataEmployee.map((e, i) => (
            <tr key={e.id}>
              <td>{i + 1}</td>
              <td>{e.namalengkap}</td>
              <td>{e.nik}</td>
              <td>{e.alamat}</td>
              <td>{e.createdBy}</td>
              <td>{moment().format("Do MMM yy, h:mm a")}</td>
              <td>
                <div className="flex gap-2 justify-center items-center">
                  <button className="bg-blue-400 text-white rounded-md w-10">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white rounded-md w-14">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
