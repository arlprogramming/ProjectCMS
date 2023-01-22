import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Column from "antd/es/table/Column";
import React, { useState, useEffect } from "react";
import "./BootstrapCss.css";

export default function TableBootstrap({ selected }) {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [sort, setSort] = useState("ASC");
  const [search, setSearch] = useState([]);
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  //console.log(selected);

  useEffect(() => {
    setLoading(true);
    //console.log(selected);
    {
      //console.log(selected);
      fetch(`${API_URL}/?name=${selected}`) //https://jsonplaceholder.typicode.com/users
        .then((response) => response.json())
        .then((json) => {
          setDataSource(json);
        })
        .catch((err) => {
          alert(`Error adalah : ${err}`);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [selected]);

  const sortOnclick = (column) => {
    //return alert(column);
    //console.log(column);
    if (sort === "ASC") {
      const sorted = [...dataSource].sort((a, b) =>
        a[column] > b[column] ? 1 : -1
      );
      setDataSource(sorted);
      setSort("DSC");
    }
    if (sort === "DSC") {
      const sorted = [...dataSource].sort((a, b) =>
        a[column] < b[column] ? 1 : -1
      );
      setDataSource(sorted);
      setSort("ASC");
    }
  };
  return (
    <div className="container">
      <div className="table-responsive table table-sm border">
        <table className="table ">
          <thead className="text-center bg-slate-500 border text-white">
            <tr>
              <th scope="col" onClick={() => sortOnclick("name")}>
                Name
                <FontAwesomeIcon
                  icon={faSort}
                  className="font hover:text-red-900"
                ></FontAwesomeIcon>
              </th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody className="border">
            {dataSource.map((e) => {
              return (
                <tr key={e.id}>
                  <th scope="row">{e.name}</th>
                  <td>{e.email}</td>
                  <td className="text-center">{e.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <script>$('#sortTable').DataTable();</script>
      </div>
    </div>
  );
}
