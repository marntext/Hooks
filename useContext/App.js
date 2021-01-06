import React, { useState } from "react";
import Counter from "./Counter"
import "./styles.css";

export const CounterContext = React.createContext();

//Add Provider
export default function App() {
  const [ counter, setCounter ] = useState(0);

  const decrease = () => {
      setCounter(counter - 1)
  }

  const increase = () => {
    setCounter(counter + 1)
}

  console.log(CounterContext);
  return (
    <div className="App">
      <CounterContext.Provider value= {{counter, decrease, increase}}>
        <Counter />
      </CounterContext.Provider>
    </div>
  );
}
