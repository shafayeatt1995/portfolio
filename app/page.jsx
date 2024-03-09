import Image from "next/image";
import Logo2 from "@/public/img/logo/logo-2.png";
import Anik from "@/public/img/anik.jpg";

export default function Home() {
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
            <div className="col-xxl-3 col-xl-3">
              <div className="anik-personal-info-area">
                <div className="anik-personal-info-wrap">
                  <div className="anik-personal-info-img">
                    <Image src={Anik} alt="avatar" />
                  </div>

                  <h4 className="anik-personal-info-name">
                    <a href="#">Shafayet Al-Anik</a>
                  </h4>
                  <span className="anik-personal-info-bio mb-15">
                    Full stack developer
                  </span>

                  <ul className="anik-personal-info-social-link mb-30">
                    <li>
                      <a
                        href="https://www.facebook.com/safayeat.anik/"
                        target="_blank"
                        className="facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.upwork.com/freelancers/~018da29b217afd933d"
                        target="_blank"
                        className="upwork"
                      >
                        <svg
                          width="18"
                          height="13"
                          viewBox="0 0 18 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.9182 1.251C11.9888 1.26028 10.5224 2.53631 9.97338 4.56974C9.05229 3.15224 8.3337 1.53084 7.92166 0.162003L5.89105 0.171565L5.91917 5.55411C5.92037 5.80752 5.87165 6.05868 5.77578 6.29325C5.67992 6.52783 5.53879 6.74122 5.36045 6.92126C5.18212 7.10129 4.97007 7.24444 4.73641 7.34252C4.50275 7.4406 4.25207 7.4917 3.99866 7.4929C3.48689 7.49533 2.99511 7.29435 2.63151 6.93419C2.45148 6.75585 2.30834 6.5438 2.21025 6.31014C2.11217 6.07649 2.06107 5.8258 2.05987 5.57239L2.03174 0.189846L0 0.19969L0.0281249 5.58252C0.0359999 7.8162 1.82081 9.5861 4.00499 9.57485C6.18917 9.5636 7.95795 7.77879 7.9481 5.54455L7.94388 4.63049C8.35338 5.44049 8.86526 6.30111 9.42775 7.06048L8.18604 13.0072L10.2673 12.9977L11.1617 8.6771C11.9762 9.18138 12.8913 9.48148 13.9573 9.47641C16.1915 9.46657 18.0112 7.63058 17.9999 5.29424C17.9898 3.05943 16.1527 1.24059 13.9185 1.25072L13.9182 1.251ZM13.9471 7.39517C13.1349 7.39883 12.321 7.04755 11.6583 6.49152L11.8575 5.67589V5.62471C12.006 4.76015 12.4554 3.28584 13.9786 3.27909C14.5169 3.27811 15.0337 3.49017 15.4161 3.86895C15.7985 4.24774 16.0155 4.76246 16.0197 5.30071C15.9738 6.46873 15.0136 7.38758 13.9469 7.39236L13.9471 7.39517Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/shafayeatt1995"
                        target="_blank"
                        className="github"
                      >
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/shafayet-al-anik-353130142/"
                        target="_blank"
                        className="linkedin"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>

                  <div className="anik-personal-info-contact mb-30">
                    <div className="anik-personal-info-contact-item phone">
                      <div className="icon">
                        <i className="fa-solid fa-mobile-screen-button"></i>
                      </div>
                      <div className="text">
                        <span>Phone</span>
                        <p>+8801728-293635</p>
                      </div>
                    </div>

                    <div className="anik-personal-info-contact-item email">
                      <div className="icon">
                        <i className="fa-regular fa-envelope"></i>
                      </div>
                      <div className="text">
                        <span>Email</span>
                        <p class="lowercase">shafayetalanik@gmail.com</p>
                      </div>
                    </div>

                    <div className="anik-personal-info-contact-item location">
                      <div className="icon">
                        <i className="fa-solid fa-location-dot"></i>
                      </div>
                      <div className="text">
                        <span>Location</span>
                        <p>Dhanmondi 15, Dhaka</p>
                      </div>
                    </div>
                  </div>

                  <div className="anik-personal-info-btn">
                    <a className="btn-1" href="#">
                      <span className="icon">
                        <i className="fas fa-download"></i>
                      </span>
                      download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-8 col-xl-9">
              <div className="anik-page-content-wrap">
                <div className="section-wrapper pl-60 pr-60 pt-60">
                  <div className="anik-page-title-wrap mb-35">
                    <h2 className="page-title">about</h2>
                    <p>
                      I'm Creative Director and UI/UX Designer from Sydney,
                      Australia, working in web development and print media. I
                      enjoy turning complex problems into simple, beautiful and
                      intuitive designs.
                    </p>
                    <p>
                      My aim is to bring across your message and identity in the
                      most creative way. I created web design for many famous
                      brand companies.
                    </p>
                  </div>
                </div>

                <div className="section-wrapper pl-60 pr-60">
                  <div className="anik-section-title-wrap mb-30">
                    <h3 className="section-title">What I do!</h3>
                  </div>

                  <div className="anik-what-do-wrap mb-30">
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="anik-what-do-item bg-prink">
                          <div className="icon">
                            <i className="fa-light fa-swatchbook"></i>
                          </div>
                          <div className="text">
                            <h4 className="title">Ui/Ux Design</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetuer
                              adipiscing elit, sed diam euismod tincidunt
                              volutpat.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="anik-what-do-item bg-catkrill">
                          <div className="icon">
                            <i className="fa-regular fa-grid-2"></i>
                          </div>
                          <div className="text">
                            <h4 className="title">App Development</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetuer
                              adipiscing elit, sed diam euismod tincidunt
                              volutpat.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="anik-what-do-item  bg-catkrill">
                          <div className="icon">
                            <i className="fa-regular fa-camera-retro"></i>
                          </div>
                          <div className="text">
                            <h4 className="title">Photography</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetuer
                              adipiscing elit, sed diam euismod tincidunt
                              volutpat.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="anik-what-do-item bg-prink bg-blue">
                          <div className="icon">
                            <i className="fa-regular fa-code"></i>
                          </div>
                          <div className="text">
                            <h4 className="title">Web Development</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetuer
                              adipiscing elit, sed diam euismod tincidunt
                              volutpat.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section-wrapper bg-light-white-2 pt-45 pb-60 pl-60 pr-60">
                  <div className="anik-section-title-wrap text-center mb-50">
                    <h3 className="section-title">clinet</h3>
                  </div>

                  <div className="anik-client-slider">
                    <div className="swiper-container client_slide_active">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <img
                            className="anik-client-slider-logo"
                            src="assets/img/client/client-logo-1.png"
                            alt=""
                          />
                        </div>

                        <div className="swiper-slide">
                          <img
                            className="anik-client-slider-logo"
                            src="assets/img/client/client-logo-2.png"
                            alt=""
                          />
                        </div>

                        <div className="swiper-slide">
                          <img
                            className="anik-client-slider-logo"
                            src="assets/img/client/client-logo-3.png"
                            alt=""
                          />
                        </div>

                        <div className="swiper-slide">
                          <img
                            className="anik-client-slider-logo"
                            src="assets/img/client/client-logo-4.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="footer-copyright text-center pt-25 pb-25">
                  <span>
                    © 2024 All Rights Reserved by{" "}
                    <a
                      href="https://themeforest.net/user/elite-themes24"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      elite-themes24
                    </a>
                    .
                  </span>
                </div>
              </div>
            </div>

            <div className="col-xxl-1 d-xxl-block d-none">
              <div className="anik-main-menu-wrap">
                <nav className="bastami-main-menu main_menu">
                  <ul>
                    <li className="active">
                      <a href="index.html">
                        <span>
                          <i className="fa-light fa-address-card"></i>
                        </span>
                        about
                      </a>
                    </li>
                    <li>
                      <a href="resume.html">
                        <span>
                          <i className="fa-light fa-file-user"></i>
                        </span>
                        Resume
                      </a>
                    </li>
                    <li>
                      <a href="portfolio.html">
                        <span>
                          <i className="fa-light fa-briefcase"></i>
                        </span>
                        Works
                      </a>
                    </li>
                    <li>
                      <a href="blog.html">
                        <span>
                          <i className="fa-light fa-newspaper"></i>
                        </span>
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a href="contact.html">
                        <span>
                          <i className="fa-light fa-address-book"></i>
                        </span>
                        contact
                      </a>
                    </li>
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
