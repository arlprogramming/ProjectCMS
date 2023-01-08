import Sidebar from "./Component/Sidebar/Sidebar";
import "./Component/Sidebar/indexSidebar.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Component/Pages/Home/Home";

import React from "react";
import AddEmployee from "./Component/Pages/AddEmployee/AddEmployee";

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
          <div className="container">
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path="/addemployee" element={<AddEmployee />} />
              {/* <Route path="/listemployee" element={<ListEmployee />} />  */}
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
