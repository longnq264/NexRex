"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Form, Input, Button } from "antd";
import { FaUserLarge } from "react-icons/fa6";
import { FaKey } from "react-icons/fa";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { login } from "@/redux/features/auth/authSlice";

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const router = useRouter();
  const user = useAppSelector((state) => state.auth.user);
  const loggedin = useAppSelector((state) => state.auth.isLoggedIn);
  console.log(loggedin);
  const dispatch = useAppDispatch();
  console.log("state", data);
  //submit form
  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/signin",
        values
      );
      const userData = { ...response.data };
      dispatch(login(userData));
      // if (response) {
      //   router.push("/");
      // }
    } catch (error) {
      if (error.response) {
        console.log("Error response:", error.response.data.message);
      } else {
        console.log(error);
      }
    }
  };
  console.log("user values redux:", user);
  const onFinishFailed = (errorInfor) => {
    console.log("error", errorInfor);
  };
  return (
    <>
      <div className="loginform-container">
        <h2 className="title-site">Login</h2>
        <Form
          className="login-form"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Username" prefix={<FaUserLarge />} />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" prefix={<FaKey />} />
          </Form.Item>
          <Form.Item>
            <Button className="btn-auth" type="primary" htmlType="submit">
              sign in
            </Button>
          </Form.Item>
          <p className="signin-link">
            Not a member? <Link href={"/register"}>Sign up now</Link>
          </p>
        </Form>
      </div>
      <div className="profile">{/* <h2>User: {use}</h2> */}</div>
    </>
  );
};

export default LoginForm;
