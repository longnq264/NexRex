import LoginForm from "@/components/Login";
import React from "react";
import AuthLayout from "./layout";

const LoginPage = () => {
  return (
    <AuthLayout>
      <div className="login-wrapper">
        <h1 className="site-title">Login Page</h1>
        <LoginForm />
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
