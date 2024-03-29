import { Inter } from "next/font/google";
import "./globals.css";
import "@/public/css/bootstrap.min.css";
import "@/public/css/animate.min.css";
import "@/public/css/fontawesome.min.css";
import "@/public/css/odometer.min.css";
import "@/public/css/jquery.modal.min.css";
import "@/public/css/meanmenu.css";
import "@/public/css/swipper.css";
import "@/public/css/main.css";
import Fa from "../components/Fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Shafayet Al-Anik",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Fa />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
