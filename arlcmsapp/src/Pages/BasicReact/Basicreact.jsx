import React, { useState } from "react";

export default function Basicreact() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("change text");
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Jumlah : {count}</h3>
      <button
        style={{
          backgroundColor: "blue",
          borderRadius: "0.6rem",
          width: "10rem",
          height: "2rem",
          justifyContent: "center",
          marginRight: "2px",
        }}
        onClick={() => {
          setCount(count + 1);
        }}
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
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Kurang
      </button>

      <hr style={{ margin: "1rem" }} />
      <h3>{text}</h3>
      <input
        type="text"
        placeholder="masukkan teks"
        onChange={(e) => {
          setText(e.target.value);
        }}
        style={{
          height: "2em",
          color: "black",
          textAlign: "center",
          borderColor: "black",
          borderRadius: "2em",
        }}
      />
    </div>
  );
}
