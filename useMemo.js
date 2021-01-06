import React, { useMemo, useState } from "react";
import "./styles.css";

const largeData = [1, 2, 3];

export default function App() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  const calculatedData = useMemo(() => {
    console.log("0.5 dollar");
    return [...largeData, 4, 5];
  }, [largeData, number]);

  return (
    <div className="App">
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>INCREMENT</button>
      <hr />
      <p>{number2}</p>
      <button onClick={() => setNumber2(number2 + 1)}>INCREMENT2</button>
      <hr />
      {calculatedData.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </div>
  );
}
