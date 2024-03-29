"use client";
import Image from "next/image";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { Suspense } from "react";
import Counter from "@/components/Counter";
import Data from "@/components/Data";
import Layout from "@/components/Layout";
// carousel
import CarouselPage from "@/components/Carousel";
// slider
import SliderBanner from "@/components/SliderBanner";
import DashBoard from "./dashboard/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="wrap-site">
        <Layout>
          <div className="layout-site">
            <h1 className="title-site">Root Layout</h1>
            <>
              <DashBoard />
            </>
          </div>
          <div className="carousel-container">
            {/* <CarouselPage /> */}
            <SliderBanner />
          </div>
        </Layout>
      </div>
    </main>
  );
}

