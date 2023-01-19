import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

//import AntTable from "../AntTable/AntTable";
import TableBootstrap from "../Bootstrap/TableBootsrap/TableBootstrap";
import "./bootstrap.css";

export default function Bootstrap() {
  const [selected, setSelected] = useState(["Total Debitur Contacted"]);

  //----------------------------------------------------Search-------------------------------------------------

  const [dataSearch, setDataSearch] = useState([]);

  console.log(dataSearch);
  return (
    <div>
      <div className="container nav-bar"></div>
      <h3>Akumulasi Year to Date</h3>
      <hr />
      <br />
      <div className="row">
        <div className="col-md-3">Akumulasi YTD based on :</div>
        <div className="col-md-4">
          <select
            className="form-control form-control-sm"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option>Total Debitur Contacted</option>
            <option>Total Case</option>
            <option>Suspect(S)</option>
          </select>
        </div>
        <div className="col-md-3">
          <Button className="bg-primary btn-sm">Search</Button>
        </div>
      </div>
      <br />
      <div className="row ">
        <div className="col-md-4 d-flex flex-row"></div>
        <div className="col-md-6 d-flex flex-row"></div>
        <div className="col-md-2 d-flex flex-row">
          <Button className="bg-primary btn-sm ">Donwload</Button>
        </div>
      </div>
      <div className="row">
        {/* <AntTable selected={selected} /> */}
        <TableBootstrap />
      </div>
    </div>
  );
}
