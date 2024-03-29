"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
const RegisterForm = () => {
  const [formData, setFormData] = useState({});

  const inputOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onFinish = (values) => {
    console.log("Submitted values:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="register-form-container">
      <Form
        className="register-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input
            placeholder="Name"
            prefix={<UserOutlined />}
            onChange={inputOnChange}
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Invalid email address" },
          ]}
        >
          <Input
            placeholder="Email"
            prefix={<MailOutlined />}
            onChange={inputOnChange}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            placeholder="Password"
            prefix={<LockOutlined />}
            onChange={inputOnChange}
          />
        </Form.Item>
        <Form.Item>
          <Button className="btn-auth" type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
        <p>
          Already have an account? <Link href={"/login"}>Sign in here</Link>
        </p>
      </Form>
    </div>
  );
};

export default RegisterForm;
