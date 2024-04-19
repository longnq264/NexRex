"use client";
import React from "react";
import Link from "next/link";
import { Dropdown, Space } from "antd";
import { FaUserCheck, FaUserTimes } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";
import "@/styles/header.css";

const UserManager = () => {
  const stateLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  console.log("loggedIn", stateLoggedIn);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const items = [
    {
      label: <Link href="/my-account">Account Manager</Link>,
      key: "0",
    },
    {
      label: <a href="/">Wallet</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <div onClick={handleLogout}>
          <MdLogout className="pointer" />
          <span>Logout</span>
        </div>
      ),
      key: "3",
    },
  ];
  return (
    <>
      {!stateLoggedIn ? (
        <Link href={"/auth"}>
          <FaUserTimes />
        </Link>
      ) : (
        <Dropdown menu={{ items }} trigger={["hover"]}>
          <FaUserCheck />
        </Dropdown>
      )}
    </>
  );
};

export default UserManager;
