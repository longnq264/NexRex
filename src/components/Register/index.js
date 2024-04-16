"use client";
import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useRouter } from "next/navigation";
import { FaUserLarge } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { BsFillShieldLockFill } from "react-icons/bs";
import axios from "axios";

const RegisterForm = () => {
  const router = useRouter();
  const [promp, setPromp] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  console.log("state", data);

  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/signup",
        values
      );
      setData(response.data.message);
      setPromp(response.data.message);
      console.log("response", response);
      router.push("/auth");
    } catch (error) {
      setPromp(error.response.data.message);
      console.log("error ne", error.response.data.message);
    }
    console.log("Submitted values:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="register-form-container register-form">
      <h2 className="title-site">Register</h2>
      <h3 className="log-error">{promp}</h3>
      {/* <h3 className="log-data">{data}</h3> */}
      <Form
        className="register-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Name" prefix={<MdDriveFileRenameOutline />} />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Email" prefix={<FaUserLarge />} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" prefix={<FaLock />} />
        </Form.Item>
        <Form.Item
          name="confirmpassword"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            placeholder="Confirm Password"
            prefix={<BsFillShieldLockFill />}
          />
        </Form.Item>
        <Form.Item>
          <Button className="btn-auth" type="primary" htmlType="submit">
            sign up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterForm;
