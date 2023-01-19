import React from "react";

import { useDispatch, useSelector } from "react-redux";
import TableBootstrap from "../BankMandiri/Bootstrap/TableBootsrap/TableBootstrap";

export default function Home() {
  const testData = useSelector((state) => state.Reducer);
  console.log(testData);
  return (
    <div>
      Hallo
      {/* <TableBootstrap /> */}
    </div>
  );
}
