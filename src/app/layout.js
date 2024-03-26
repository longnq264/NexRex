import { Tomorrow } from "next/font/google";
import "@/styles/index.css";

// const inter = Inter({ subsets: ["latin"] });
const tomorrow = Tomorrow({ weight: "700", subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={tomorrow.className}>{children}</body>
    </html>
  );
}

