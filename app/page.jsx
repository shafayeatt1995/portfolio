"use client";
import Image from "next/image";
import { useState } from "react";
import LeftSidebar from "@/components/LeftSidebar";
import Resume from "@/components/Resume";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Work from "@/components/Work";

export default function Home() {
  let [activeTab, setActiveTab] = useState("about");

  let componentToRender;

  if (activeTab === "about") {
    componentToRender = <About />;
  } else if (activeTab === "resume") {
    componentToRender = <Resume />;
  } else if (activeTab === "work") {
    componentToRender = <Work />;
  } else if (activeTab === "contact") {
    componentToRender = <Contact />;
  }

  const menus = [
    { name: "About", icon: "fas fa-address-card", tab: "about" },
    { name: "Resume", icon: "fas fa-clipboard-user", tab: "resume" },
    { name: "Works", icon: "fas fa-briefcase", tab: "work" },
    { name: "Contact", icon: "fas fa-address-book", tab: "contact" },
  ];

  return (
    <>
      <div
        className="page-wrapper home-1"
        style={{ backgroundImage: 'url("/img/bg/page-bg-1.jpg")' }}
      >
        <div className="container z-index-3">
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-10">
            <LeftSidebar />
            <div className="flex-1">
              <ul className="flex w-full bg-white rounded-2xl p-3 lg:px-10 lg:py-4 lg:gap-4 mb-10 sticky top-0 z-10 shadow-lg justify-between lg:justify-start">
                {menus.map((menu, i) => (
                  <li
                    key={i}
                    className={`lg:py-3 lg:px-4 p-2 px-3 rounded-xl ${
                      activeTab === menu.tab ? " bg-blue-600 text-white" : ""
                    }`}
                  >
                    <a
                      className="pointer flex flex-col lg:flex-row items-center"
                      onClick={() => setActiveTab(menu.tab)}
                    >
                      <span className="lg:mr-3 text-xl">
                        <i className={menu.icon}></i>
                      </span>
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="anik-page-content-wrap">
                {componentToRender}
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
