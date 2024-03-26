import React, { useEffect, useState } from "react";
// import React, { useState } from "react";
const Counter = (props) => {
  const initialState = props.data;
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState(initialState);
  }, []);
  return (
    <div className="counter-layout">
      <button>-</button>
      <h1>{state.title}</h1>
      <button>+</button>
    </div>
  );
};

export default Counter;
