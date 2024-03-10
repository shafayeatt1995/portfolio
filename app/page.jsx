"use client";
import Image from "next/image";
import { useState } from "react";
import LeftSidebar from "@/components/LeftSidebar";
import About from "@/components/About";
import Footer from "@/components/Footer";

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

  return (
    <>
      <div
        className="page-wrapper home-1"
        style={{ backgroundImage: 'url("/img/bg/page-bg-1.jpg")' }}
      >
        <div className="anik-header-area z-index-5">
          <div className="container">
            <div className="anik-header-wrap">
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="anik-header-logo"></div>
                </div>
                <div className="col-6">
                  <div className="anik-header-menu-btn text-right">
                    <div className="menu-btn toggle_menu">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-menu-wrap">
              <div className="mobile-menu mobile_menu"></div>
            </div>
          </div>
        </div>
        <div className="container z-index-3">
          <div className="row">
            <LeftSidebar />
            <div className="col-xxl-8 col-xl-9">
              <div className="anik-page-content-wrap">
                {componentToRender}
                <Footer />
              </div>
            </div>

            <div className="col-xxl-1 d-xxl-block d-none">
              <div className="anik-main-menu-wrap">
                <nav className="bastami-main-menu main_menu">
                  <ul>
                    <li className="active">
                      <a
                        className="pointer"
                        onClick={() => setActiveTab("about")}
                      >
                        <span>
                          <i className="fas fa-address-card"></i>
                        </span>
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        className="pointer"
                        onClick={() => setActiveTab("resume")}
                      >
                        <span>
                          <i className="fa-solid fa-clipboard-user"></i>
                        </span>
                        Resume
                      </a>
                    </li>
                    <li>
                      <a
                        className="pointer"
                        onClick={() => setActiveTab("works")}
                      >
                        <span>
                          <i className="fas fa-briefcase"></i>
                        </span>
                        Works
                      </a>
                    </li>
                    <li>
                      <a
                        className="pointer"
                        onClick={() => setActiveTab("contact")}
                      >
                        <span>
                          <i className="fas fa-address-book"></i>
                        </span>
                        Contact
                      </a>
                    </li>
                    {/* <li>
                      <a href="blog.html">
                        <span>
                          <i className="fas fa-newspaper"></i>
                        </span>
                        Blogs
                      </a>
                    </li> */}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
