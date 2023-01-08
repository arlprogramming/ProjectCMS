import Sidebar from "./Component/Sidebar/Sidebar";
import "./Component/Sidebar/indexSidebar.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddEmployee from "./Component/Pages/AddEmployee/AddEmployee";
import Home from "./Component/Pages/Home/Home";
import ListEmployee from "./Component/Pages/AddEmployee/listEmployee";

import React from "react";

export default function App() {
  return (
    <Router>
      <div className="wrap">
        {/* <div>
          <Navigation />
        </div> */}
        {/* ------------------------------------------main--------------------------------- */}
        <div className="main">
          <Sidebar />
          <div className="container-menu">
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path="/addemployee" element={<AddEmployee />} />
              <Route path="/addemployee" element={<ListEmployee />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );

  // return (
  //   <div className="App">
  //     <Routes>
  //       <Route>
  //         <Route path={"/"} element={<Home />} />
  //         <Route path={"/addemployee"} element={<AddEmployee />} />
  //         <Route path="/addemployee/listemployee" element={<ListEmployee />} />
  //         <Route path={"*"} element={<h1>Page not found rul...</h1>} />
  //       </Route>
  //     </Routes>
  //   </div>
  // );
}
