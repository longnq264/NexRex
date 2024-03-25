import React from "react";
import "../styles/header.css";
import Image from "next/image";
import BackGround from "../../../public/banner.jpg";
import Navigation from "./Navigation";
const justifyOptions = [
  "flex-start",
  "center",
  "flex-end",
  "space-between",
  "space-around",
  "space-evenly",
];

const alignOptions = ["flex-start", "center", "flex-end"];
const Header = (props) => {
  return (
    <header className="header-container">
      {/* <Image className="banner-site" src={BackGround} alt="banner" /> */}
      <div className="header-wrapper">
        <div className="header-site layout-site">
          <div className="logo-site">
            <h1 className="logo">NEXREX</h1>
          </div>
          <nav className="nav-item">
            <Navigation />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
