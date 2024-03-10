import React from "react";
import Image from "next/image";
import Footyamigo from "@/public/img/client/footyamigo.webp";
import Arbamigo from "@/public/img/client/arbamigo.png";
import Goat from "@/public/img/client/goat.png";

export default function About() {
  const tech = [
    { name: "Vue JS", image: "/img/tech/vue.svg", star: 5 },
    { name: "Nuxt JS", image: "/img/tech/nuxt.jpg", star: 5 },
    { name: "Express", image: "/img/tech/express.svg", star: 5 },
    { name: "Node JS", image: "/img/tech/node.svg", star: 4 },
    { name: "MongoDB", image: "/img/tech/mongodb.png", star: 5 },
    { name: "React JS", image: "/img/tech/react.svg", star: 3 },
    { name: "Next JS", image: "/img/tech/next.svg", star: 3 },
    { name: "Tailwind CSS", image: "/img/tech/tailwind.svg", star: 5 },
    { name: "SASS", image: "/img/tech/sass.svg", star: 5 },
    { name: "Socket", image: "/img/tech/socket.svg", star: 5 },
    { name: "AWS", image: "/img/tech/aws.svg", star: 3 },
    { name: "Laravel", image: "/img/tech/laravel.svg", star: 3 },
  ];
  return (
    <>
      <div className="section-wrapper pl-60 pr-60 pt-60">
        <div className="anik-page-title-wrap mb-35">
          <h2 className="page-title">about</h2>
          <p>
            As a Full Stack Developer, I'm dedicated to crafting innovative web
            and mobile solutions. With proficiency in both front-end and
            back-end technologies, I bring ideas to life, ensuring robust
            functionality and engaging user interfaces. My passion for coding
            and problem-solving drives me to deliver high-quality, scalable
            applications. I thrive in collaborative environments, always eager
            to learn and adapt to emerging technologies to stay at the forefront
            of the industry.
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
                  <i className="fas fa-swatchbook"></i>
                </div>
                <div className="text">
                  <h4 className="title">Ui/Ux Design</h4>
                  <p>
                    Crafting seamless, intuitive interfaces tailored to user
                    needs, I specialize in UI/UX design, enhancing satisfaction
                    and driving success.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="anik-what-do-item bg-catkrill">
                <div className="icon">
                  <i className="fa-solid fa-desktop"></i>
                </div>
                <div className="text">
                  <h4 className="title">Web Development</h4>
                  <p>
                    Creating powerful web solutions with React.js, Node.js,
                    Express.js, and MongoDB optimized for performance and user
                    experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="anik-what-do-item bg-catkrill">
                <div className="icon">
                  <i class="fa-solid fa-wave-square"></i>
                </div>
                <div className="text">
                  <h4 className="title">Server Maintenance</h4>
                  <p>
                    Ensuring continuous optimal performance and security through
                    diligent site maintenance, minimizing down time and safe
                    guarding against vulnerabilities.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="anik-what-do-item bg-prink">
                <div className="icon">
                  <i className="fa-regular fa-star"></i>
                </div>
                <div className="text">
                  <h4 className="title">Branding</h4>
                  <p>
                    Crafting captivating brand identities that resonate with
                    audiences through strategic design and storytelling,
                    elevating brand perception and driving engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-wrapper bg-light-white-2 pt-45 pb-60 pl-60 pr-60">
        <div className="anik-section-title-wrap text-center mb-50">
          <h3 className="section-title">Technology i use</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-8">
          {tech.map((t, i) => (
            <div
              className="flex flex-col justify-between min-h-100 mb-6"
              key={i}
            >
              <Image
                height="80"
                width="80"
                src={t.image}
                alt={t.name}
                className="flex-1 self-center max-w-20 max-h-20"
              />
              <p className="flex justify-center">{t.name}</p>
              <div className="flex justify-center">
                {t?.star &&
                  [...Array(t.star)].map((_, index) => (
                    <i
                      key={index + "fas"}
                      className="fa-solid fa-star text-xs text-amber-500"
                    ></i>
                  ))}
                {t?.star &&
                  [...Array(5 - t.star)].map((_, index) => (
                    <i
                      key={index + "far"}
                      className="far fa-star text-xs text-amber-500"
                    ></i>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-wrapper bg-light-white-2 pt-45 pb-60 pl-60 pr-60">
        <div className="anik-section-title-wrap text-center mb-50">
          <h3 className="section-title">client</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
          <a
            href="https://dashboard.footyamigo.com/"
            target="_blank"
            className="flex flex-col items-center"
          >
            <Image src={Footyamigo} className="h-32 w-auto" />
            <p>Footy Amigo</p>
          </a>
          <a
            className="flex flex-col items-center"
            href="https://goat.footyamigo.com/"
            target="_blank"
          >
            <Image src={Goat} className="h-32 w-auto" />
            <p>Goat Amigo</p>
          </a>
          <a
            className="flex flex-col items-center"
            href="https://app.arbamigo.com/"
            target="_blank"
          >
            <Image src={Arbamigo} className="h-32 w-auto" />
            <p>Arbitrage</p>
          </a>
        </div>
      </div>
    </>
  );
}
