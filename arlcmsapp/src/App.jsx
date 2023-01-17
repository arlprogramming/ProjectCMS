import React from "react";
import "antd/dist/reset.css";
import "./Component/Sidebar/indexSidebar.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Component/Sidebar/Sidebar";

import AddEmployee from "./Pages/AddEmployee/addEmployee";
import Home from "./Pages/Home/Home";
import ListEmployee from "./Pages/ListEmployee/listEmployee";
import Basicreact from "./Pages/BasicReact/Basicreact";
import ReducerPage from "./Pages/Redux/ReducerPage/ReducerPage";
import AntTable from "./Pages/BankMandiri/AntTable/AntTable";
import Bootstrap from "./Pages/BankMandiri/Bootstrap/Bootstrap";

export default function App() {
  return (
    <div className="wrap">
      {/* <div>
          <Navigation />
        </div> */}
      {/* ------------------------------------------main--------------------------------- */}
      <div className="main">
        <Sidebar />
        <div className="container overflow-auto">
          <Routes>
            <Route path={"/"} element={<Home />} />

            <Route path="/addemployee" element={<AddEmployee />} />
            <Route path="/addemployee/list" element={<ListEmployee />} />
            <Route path="/basicreact" element={<Basicreact />} />
            <Route path="/redux" element={<ReducerPage />} />
            <Route path="/anttable" element={<AntTable />} />
            <Route path="/bootstrap" element={<Bootstrap />} />

            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
