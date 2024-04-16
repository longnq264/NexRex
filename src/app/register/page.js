import RegisterForm from "@/components/Register";
import RegisterLayout from "./layout";
import React from "react";

const Register = () => {
  return (
    <RegisterLayout>
      <div className="wrapper-register-site">
        <div className="layout-site">
          <RegisterForm />
        </div>
      </div>
    </RegisterLayout>
  );
};

export default Register;
