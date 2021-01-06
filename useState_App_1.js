import React, { useState, useEffect } from "react";
import "./styles.css";
export default function App() {
  const [isVisible, setVisible] = useState(false);
  const [obj, setObj] = useState({ apple: 5 });
  const [dataList, setDataList] = useState([1, 2, 3]);
  const changeState = () => {
    setInterval(() => setVisible((s) => !s), 1000);
  };
  const changeState2 = () => {
    setObj({ ...obj, banana: 7 });
  };
  const changeState3 = () => {
    setDataList(prevState => [...prevState, 4])
  };
  return (
    <div className="App">
      <h1>{isVisible ? "It is Visible" : "It is Hidden"}</h1>
      <button onClick={changeState}> Toogle </button>
      <h1>{JSON.stringify(obj)}</h1>
      <button onClick={changeState2}> Toogle </button>
      <h1>{JSON.stringify(dataList)}</h1>
      <button onClick={changeState3}> Toogle </button>
    </div>
  );
}