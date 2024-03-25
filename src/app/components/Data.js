import axios from "axios";
import React, { useEffect, useState } from "react";

const Data = () => {
  const [state, setState] = useState([]);
  console.log("state", state);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/posts");
      setState(response.data);
      console.log("response", response.data);
    } catch (error) {
      console.log("error fetching data", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="btn">
      <button onClick={() => fetchData()}>get data</button>
      {state.map((data) => (
        <h1 key={data.id}>{data.title}</h1>
      ))}
    </div>
  );
};

export default Data;
