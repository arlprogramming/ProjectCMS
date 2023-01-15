import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tambah, Kurang } from "../Action/Action";

export default function ReducerPage() {
  const tampilanData = useSelector((state) => state.Reducer);
  //const [count, setCount] = useState(tampilanData.nilai);
  console.log(count);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>ReducerPage</h3>
      <p>{tampilanData.nilai}</p>
      <button
        style={{
          backgroundColor: "blue",
          borderRadius: "0.6rem",
          width: "10rem",
          height: "2rem",
          justifyContent: "center",
          marginRight: "2px",
        }}
        onClick={() => dispatch(Tambah())}
      >
        Tambah
      </button>
      <button
        style={{
          backgroundColor: "blue",
          borderRadius: "0.6rem",
          width: "10rem",
          height: "2rem",
          justifyContent: "center",
          marginLeft: "2px",
        }}
        onClick={() => dispatch(Kurang())}
      >
        Kurang
      </button>
    </div>
  );
}
