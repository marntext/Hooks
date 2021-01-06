import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [isVisible, setVisible] = useState(false);

  const [obj, setObj] = useState({ apple: 5 });
  const [dataList, setDataList] = useState([1, 2, 3]);

  const changeState1 = () => {
    setObj({ ...obj, banana: 10 });
  };

  const changeState2 = () => {
    setDataList((prevState) => [...prevState, 4]);
  };

  const changeState = () => {
    setInterval(() => setVisible((s) => !s), 1000);
  };

  return (
    <div className="App">
      <h1>{isVisible ? "It's visible " : "It's hidden"}</h1>
      <h1>{JSON.stringify(obj)}</h1>
      <h1>{JSON.stringify(dataList)}</h1>

      <button onClick={() => setVisible((s) => !s)}>Toggle </button>
      <button onClick={changeState}>Change</button>
      <button onClick={changeState1}>Change1</button>
      <button onClick={changeState2}>Change2</button>
    </div>
  );
}
