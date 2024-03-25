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
      <h1>{state.title}</h1>
    </div>
  );
};

export default Counter;
