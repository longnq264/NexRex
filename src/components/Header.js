import React from "react";
import "@/styles/header.css";
import Image from "next/image";
import BackGround from "@/public/banner.jpg";
import Navigation from "./Navigation";
import Link from "next/link";
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
            <Link href={"/"}>NEXREX</Link>
          </div>
          <div className="wrap-header-right">
            <nav className="nav-item">
              <Navigation />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
