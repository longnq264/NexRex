"use client";
import React, { useState } from "react";
import Navigation from "./home/Navigation";
import Link from "next/link";
import { Flex } from "antd";
import { IoBagSharp } from "react-icons/io5";
import Logo from "./home/Logo";
import UserManager from "./home/UserManager";
import "@/styles/header.css";

const Header = (props) => {
  return (
    <header className="header-container">
      <div className="header-wrapper">
        <div className="header-site layout-site">
          <Logo />
          <Flex className="wrap-header-right">
            <nav className="nav-item">
              <Navigation />
            </nav>
            <div className="list-icon flex">
              <Link href={"/cart"}>
                <IoBagSharp />
              </Link>
              <UserManager />
            </div>
          </Flex>
        </div>
      </div>
    </header>
  );
};

export default Header;
