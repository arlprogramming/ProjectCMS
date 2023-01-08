import React from "react";
import "./Component/Sidebar/indexSidebar.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Component/Sidebar/Sidebar";

import AddEmployee from "./Pages/AddEmployee/addEmployee";
import Home from "./Pages/Home/Home";
import ListEmployee from "./Pages/ListEmployee/listEmployee";

export default function App() {
  return (
    <div className="wrap">
      {/* <div>
          <Navigation />
        </div> */}
      {/* ------------------------------------------main--------------------------------- */}
      <div className="main">
        <Sidebar />
        <div className="container">
          <Routes>
            <Route path={"/"} element={<Home />} />

            <Route path="/addemployee" element={<AddEmployee />} />
            <Route path="/addemployee/list" element={<ListEmployee />} />

            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </div>

    // <Routes>
    //   <Route path="/" element={<h1>Login</h1>} />

    //   <Route path="/dashboard" element={<Dashboard />}>
    //     <Route index element={<ListEmployee />} />
    //     <Route path="/dashboard/add" element={<AddEmployee />} />
    //   </Route>

    //   <Route path="*" element={<h1>Page Not Found</h1>} />
    // </Routes>
  );
}
