"use client";
import Image from "next/image";
import { Provider } from "react-redux";
import { useEffect } from "react";
import Counter from "@/components/Counter";
import Data from "@/components/Data";
import Layout from "@/components/Layout";

export default function Home() {
  const data = {
    title: "titleHomePage",
    id: 1,
    des: "description",
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="wrap-site">
        <Layout>
          <div className="layout-site">
            <h1 className="title">Root Layout</h1>
          </div>
          {/* <Data /> */}
        </Layout>
      </div>
    </main>
  );
}

