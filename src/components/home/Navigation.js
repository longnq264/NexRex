import React from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

const Navigation = () => {
  return (
    <div className="nav-container">
      <div className="menu-wrapper">
        <ul>
          {NAV_LINKS.map((data, index) => (
            <li key={index}>
              <Link href={`/${data.key}`}>{data.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
