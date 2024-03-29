import React, { useState } from "react";
import "@/styles/header.css";
import Image from "next/image";
import BackGround from "@/public/banner.jpg";
import Navigation from "./Navigation";
import Link from "next/link";
import { Flex } from "antd";
import { IoBagSharp } from "react-icons/io5";
import { FaUserCheck, FaUserTimes } from "react-icons/fa";
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
  const [user, setUser] = useState(false);
  return (
    <header className="header-container">
      {/* <Image className="banner-site" src={BackGround} alt="banner" /> */}
      <div className="header-wrapper">
        <div className="header-site layout-site">
          <div className="logo-site">
            <Link href={"/"}>NEXREX</Link>
          </div>
          <Flex className="wrap-header-right">
            <nav className="nav-item">
              <Navigation />
            </nav>
            <div className="list-icon">
              <Link href={"/cart"}>
                <IoBagSharp />
              </Link>
              <Link href={user ? "/logout" : "/auth"}>
                {user ? <FaUserTimes /> : <FaUserCheck />}
              </Link>
            </div>
          </Flex>
        </div>
      </div>
    </header>
  );
};

export default Header;
