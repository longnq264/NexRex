import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const Navigation = () => {
  const [state, setState] = useState([]);
  console.log(state);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/navigate");
      setState(response.data);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="nav-container">
      <div className="menu-wrapper">
        <ul>
          {state.map((data) => (
            <li key={data.id}>
              <Link href={`/${data.name}`}>{data.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
