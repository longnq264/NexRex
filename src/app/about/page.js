"use client";
import Link from "next/link";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleTheme } from "@/redux/features/themeSlice";

const AboutPage = () => {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);
  const dispatch = useAppDispatch();

  return (
    <div className="about-site">
      <h1>About Page</h1>
      <div>
        <Link href="/blog">Blog</Link>
        <Link href="/history">History</Link>
        <h1>Currently theme: {currentTheme}</h1>
        <button onClick={() => dispatch(toggleTheme())}>Change State</button>
      </div>
    </div>
  );
};

export default AboutPage;

