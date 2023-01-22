import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { async } from "@firebase/util";
import { useEffect } from "react";

export const EditModal = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const EditCustomer = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        firstName,
        lastName,
        email,
      });

      navigate("/addcustomer");
    } catch (error) {
      console.log(error);
    }
  };
  //console.info(firstname, lastname, email);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setFirstname(response.data.firstName);
    setLastname(response.data.lastName);
    setEmail(response.data.email);
  };

  return (
    <div className="row border rounded p-2 ">
      <div className="row">
        <h2>Edit Customer</h2>
        <hr />
      </div>

      <form className="d-flex justify-content-center" onSubmit={EditCustomer}>
        <div className="form-group row border rounded p-1 col-md-10 d-flex justify-content-center">
          <div className="form-group row">
            <label htmlFor="firstname" className="col-sm-2 col-form-label">
              First Name
            </label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                id="firstname"
                placeholder="Full Name"
                value={firstName}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <label htmlFor="lastname" className="col-sm-2 col-form-label">
              Last Name
            </label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                id="lastname"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>
          <br />
          <br />
          {/* ------------------------------------------------------Email-------------------------------------------------- */}
          <div className="form-group row">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-end ">
          <button className="btn btn-danger btn-sm m-1">Cancel</button>
          <button className="btn btn-primary btn-sm  m-1" type="submit">
            Save
          </button>
        </div>
      </form>
      <hr style={{ width: "97%", marginTop: "1em" }} />
      {/* <div className="d-flex justify-content-end">
        <Button className="btn btn-danger btn-sm m-1">Cancel</Button>
        <Button className="btn btn-primary btn-sm  m-1">Save</Button>
      </div> */}
    </div>
  );
};
