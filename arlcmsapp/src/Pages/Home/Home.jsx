import React from "react";

import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const testData = useSelector((state) => state.Reducer);
  console.log(testData);
  return <div>Hallo</div>;
}
