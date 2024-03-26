import React, { useState } from "react";
import "@/styles/sidebar.css";
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="sidebar-container">
      <div className="sidebar-wrapper">
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <button className="toggle-btn" onClick={toggleSideBar}>
            Toggle SideBar
          </button>
          <nav className="wrap-navbar">
            <ul>
              <li>Menu Item 1</li>
              <li>Menu Item 2</li>
              <li>Menu Item 3</li>
              {/* Add more menu items here */}
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
