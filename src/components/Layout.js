// Layout.js

import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <SideBar />
      <main className="main-container">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
