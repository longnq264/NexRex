"use client";
import Layout from "@/components/Layout";
import SliderBanner from "@/components/home/SliderBanner";
import CarouselPage from "@/components/home/Carousel";
import DashBoard from "./dashboard/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="wrap-site">
        <Layout>
          <div className="layout-site">
            <h1 className="title-site">Root Layout</h1>
          </div>
          <div className="carousel-container">
            <SliderBanner />
          </div>
        </Layout>
      </div>
    </main>
  );
}

