import React, { useState, useEffect } from "react";
import axios from "axios";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { async } from "@firebase/util";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddCustomer = () => {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setCustomer(response.data);
    //console.log(users);
  };

  const DeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Link to={"/addmodal"} className="btn btn-sm btn-primary">
        Add Customer
      </Link>
      <br />
      <br />
      <div className="container">
        <div className="table-responsive table table-sm">
          <table className="table ">
            <thead className="text-center  text-black">
              <tr>
                <th scope="col">No</th>
                <th scope="col" onClick={() => sortOnclick("name")}>
                  Name
                  <FontAwesomeIcon
                    icon={faSort}
                    className="font hover:text-red-900"
                  ></FontAwesomeIcon>
                </th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {customer.map((data, index) => (
                <tr key={data.id}>
                  <th className="text-center">{index + 1}</th>
                  <td>
                    {data.firstName} {data.lastName}
                  </td>
                  <td className="text-center">{data.email}</td>
                  <td className="text-center">
                    <Link
                      to={`/editcustomer/${data.id}`}
                      className="btn btn-sm btn-warning m-1"
                      data-toggle="modal"
                    >
                      Edit
                    </Link>
                    <Link
                      onClick={() => DeleteUser(data.id)}
                      className="btn btn-sm btn-danger m-1"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <script>$('#sortTable').DataTable();</script>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;
