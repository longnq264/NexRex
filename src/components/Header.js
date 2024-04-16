import React, { useState } from "react";
import Navigation from "./home/Navigation";
import Link from "next/link";
import { Flex } from "antd";
import { IoBagSharp } from "react-icons/io5";
import { FaUserCheck, FaUserTimes } from "react-icons/fa";
import Logo from "./home/Logo";
import "@/styles/header.css";

const Header = (props) => {
  const [user, setUser] = useState(false);

  const handleLogout = () => {
    setUser(false);
  };
  return (
    <header className="header-container">
      <div className="header-wrapper">
        <div className="header-site layout-site">
          <Logo />
          <Flex className="wrap-header-right">
            <nav className="nav-item">
              <Navigation />
            </nav>
            <div className="list-icon">
              <Link href={"/cart"}>
                <IoBagSharp />
              </Link>
              <Link href={user ? "/logout" : "/auth"}>
                {user ? (
                  <FaUserTimes onClick={handleLogout} />
                ) : (
                  <FaUserCheck />
                )}
              </Link>
            </div>
          </Flex>
        </div>
      </div>
    </header>
  );
};

export default Header;
