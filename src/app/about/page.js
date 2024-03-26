import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div className="about-site">
      <h1>About Page</h1>
      <div>
        <Link href="/blog">Blog</Link>
        <Link href="/history">History</Link>
      </div>
    </div>
  );
};

export default AboutPage;

