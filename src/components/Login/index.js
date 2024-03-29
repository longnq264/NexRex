"use client";
import React, { useState } from "react";
import Link from "next/link";
// import { useRouter } from "next/router";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const LoginForm = () => {
  const [state, setState] = useState({});
  console.log(state);
  // get datA from input
  const fetchData = (e) => {};
  //submit form
  const onFinish = (values) => {
    console.log("submit", values);
  };

  const onFinishFailed = (errorInfor) => {
    console.log("error", errorInfor);
  };
  return (
    <div className="loginform-container">
      <Form
        className="login-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Username" prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" prefix={<LockOutlined />} />
        </Form.Item>
        <Form.Item>
          <Button className="btn-auth" type="primary" htmlType="submit">
            sign in
          </Button>
        </Form.Item>
        <p>
          Not a member? <Link href={"/register"}>Sign up now</Link>
        </p>
      </Form>
    </div>
  );
};

export default LoginForm;
