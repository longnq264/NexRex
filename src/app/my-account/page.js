"use client";
import React, { useState } from "react";
import ClientLayout from "./layout";

const MyAccount = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {!loggedIn ? (
        <div className="myaccount-page">
          <h3>Your Account Manage</h3>
        </div>
      ) : (
        <div>
          <h3>Please login an account</h3>
        </div>
      )}
    </>
  );
};

export default MyAccount;
