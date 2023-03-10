import React from "react";
import "antd/dist/reset.css";
import "./Component/Sidebar/indexSidebar.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Component/Sidebar/Sidebar";

import Home from "./Pages/Home/Home";

import ReducerPage from "./Pages/Redux/ReducerPage/ReducerPage";

import Bootstrap from "./Pages/BankMandiri/Bootstrap/Bootstrap";
import Customer from "./Pages/BankMandiri/Customer/Customer";
import { EditModal } from "./Component/Modal/Modal Customer/EditModal";
import { AddModal } from "./Component/Modal/Modal Customer/AddModal";

export default function App() {
  return (
    <div className="wrap">
      {/* <div>
          <Navigation />
        </div> */}
      {/* ------------------------------------------main--------------------------------- */}
      <div className="main">
        <Sidebar />
        <div className="container-app overflow-auto">
          <Routes>
            <Route path={"/"} element={<Home />} />

            <Route path="/redux" element={<ReducerPage />} />

            <Route path="/bootstrap" element={<Bootstrap />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/addmodal" element={<AddModal />} />
            <Route path="/editcustomer/:id" element={<EditModal />} />

            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
