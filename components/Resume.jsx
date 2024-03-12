import React from "react";

export default function Resume() {
  const list = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Sass/Less",
    "JavaScript",
    "Vue.js",
    "Nuxt.js",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Laravel",
    "MySQL",
    "Responsive Design",
    "Bootstrap",
    "Git",
    "GitHub",
    "Bitbucket",
    "Security Best Practices",
    "Authentication and Authorization",
    "JSON Web Tokens (JWT)",
    "Microservices",
    "SEO Optimization",
    "Cross-Browser Compatibility",
    "Web Sockets",
    "Performance Optimization",
    "Progressive Web Apps (PWAs)",
    "Serverless Architecture",
    "AWS (Amazon Web Services)",
    "Code Reviews",
  ];

  return (
    <div className="anik-page-content-wrap">
      <div className="section-wrapper px-10 pt-60">
        <div className="anik-page-title-wrap mb-15">
          <h2 className="page-title">resume</h2>
        </div>
      </div>

      <div className="section-wrapper px-10 mb-60">
        <div className="row">
          <div className="col-xl-6 col-lg-7">
            <div className="anik-section-title-wrap mb-20">
              <h4 className="section-title">
                <i className="fa-solid fa-graduation-cap"></i> Education
              </h4>
            </div>

            <div className="anik-card-wrap">
              <div className="anik-card-item bg-prink mb-20">
                <span className="card-subtitle">2018</span>
                <h6 className="card-title">
                  B.B.S (Bachelor of Business Studies){" "}
                </h6>
                <p className="card-text">Foyezuddin Degree College, Naogaon</p>
              </div>

              <div className="anik-card-item bg-catkrill mb-20">
                <span className="card-subtitle">2013</span>
                <h6 className="card-title">
                  H.S.C (Higher secondary certificate)
                </h6>
                <p className="card-text">Astanmolla Degree College, Naogaon</p>
              </div>

              <div className="anik-card-item bg-prink">
                <span className="card-subtitle">2011</span>
                <h6 className="card-title">
                  S.S.C (Secondary School Certificate)
                </h6>
                <p className="card-text">Kirtipur High School, Naogaon</p>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-5">
            <div className="anik-section-title-wrap mb-20">
              <h4 className="section-title">
                <i className="fa-solid fa-briefcase"></i> experience
              </h4>
            </div>

            <div className="anik-card-item bg-catkrill  mb-20">
              <span className="card-subtitle">Jul 2023 - Mar 2024</span>
              <h6 className="card-title">
                Full Stack developer(Lead Developer)
              </h6>
              <a
                href="https://www.arbamigo.com/"
                target="_blank"
                className="card-text underline"
              >
                Arbitrage
              </a>
            </div>

            <div className="anik-card-item bg-prink mb-20">
              <span className="card-subtitle">Dec 2021 - Mar 2024</span>
              <h6 className="card-title">Full Stack Developer</h6>
              <a
                href="https://footyamigo.com/"
                target="_blank"
                className="card-text underline"
              >
                Footy Amigo
              </a>
            </div>

            <div className="anik-card-item bg-catkrill ">
              <span className="card-subtitle">Mar 2020 - Aug 2021</span>
              <h6 className="card-title">Jr. Laravel Developer</h6>
              <a
                href="https://codecanyon.net/user/amcoders/portfolio"
                target="_blank"
                className="card-text underline"
              >
                AM Coders
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="section-wrapper bg-light-white-2 pt-70 pb-60 pl-60 pr-60">
        <div className="row">
          <div className="col-12">
            <div className="anik-section-title-wrap mb-20">
              <h4 className="section-title">Working Skills</h4>
            </div>

            <div className="skill-bar-wrap grid grid-cols-1 lg:grid-cols-2 gap-x-10">
              <div className="skill-bar-item mb-30">
                <div className="title-wrap">
                  <h5 className="title">Javascript</h5>
                  <span className="count">85%</span>
                </div>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-line progress-bg-1"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div className="skill-bar-item mb-30">
                <div className="title-wrap">
                  <h5 className="title">Node JS</h5>
                  <span className="count">75%</span>
                </div>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-line progress-bg-2"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>

              <div className="skill-bar-item mb-30">
                <div className="title-wrap">
                  <h5 className="title">MongoDB</h5>
                  <span className="count">80%</span>
                </div>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-line progress-bg-3"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              <div className="skill-bar-item mb-30">
                <div className="title-wrap">
                  <h5 className="title">Figma</h5>
                  <span className="count">80%</span>
                </div>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-line progress-bg-3"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              <div className="skill-bar-item">
                <div className="title-wrap">
                  <h5 className="title">PHP/Laravel</h5>
                  <span className="count">60%</span>
                </div>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-line progress-bg-4"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 pt-12">
            <div className="anik-section-title-wrap mb-20">
              <h4 className="section-title">Knowledges</h4>
            </div>

            <div className="knowledeges-item-wrap">
              {list.map((d, i) => (
                <span className="gk-item" key="i">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
