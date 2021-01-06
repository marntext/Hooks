import React, { useReducer } from "react";
import "./styles.css";
const initialState = { counter: 0 };
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1}
    case "DECREMENT":
      return { counter: state.counter - 1}
    default:
      return state;
  } 
}
export default function App() {
  const [state, dispatch]  = useReducer(counterReducer, initialState );
  return ( 
    <div>
      <h1>{state.counter}</h1>
      <button onClick={()=>dispatch({type: "DECREMENT"})}> DECREMENT</button>
      <button onClick={()=>dispatch({type: "INCREMENT"})}> INCREMENT</button>
    </div>
  );
}