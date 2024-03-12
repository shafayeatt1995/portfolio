import React from "react";
import FootyAmigo from "@/public/img/portfolio/1.jpeg";
import ArbAmigo from "@/public/img/portfolio/4.jpg";
import Goat from "@/public/img/portfolio/5.webp";
import Image from "next/image";

export default function Portfolio() {
  const lists = [
    {
      name: "AI-based outsmart bookmakers",
      url: "https://dashboard.footyamigo.com/",
      role: "Full stack developer",
      image: FootyAmigo,
      tech: "Nuxt, Vuex, Express, OpenAI API, Roanuz Football API, JWT, Stripe, Paddle, MongoDB, Mongoose Socket.IO and AWS services",
      description: `Developed API using Express, which communicates with MongoDB via Mongoose.
      <br />
      ❖ Designed and developed UI using NuxtJS, and other necessary npm libraries.
      <br />
      ❖ Built multiple AI assistants using OpenAI's latest model and trained them using our dataset.
      <br />
      ❖ Utilized Roanuz Football API for collecting live game data and training Open AI. 
      <br />
❖ Implemented role-based auth, subscription plan, and integrated payment with Stripe and Paddle. `,
    },
    {
      name: "Arbitrage",
      url: "https://app.arbamigo.com/",
      role: "Full stack developer",
      image: ArbAmigo,
      tech: "Vue.js, Nuxt.js, Vuex, Bootstrap, SCSS, Express.js, MongoDB, Socket.io, AWS SES, AWS S3, AWS LAMBDA, Node Mailer, JWT, PM2",
      description:
        "Arb Amigo™ is the #1 tool for daily risk-free betting profits. With its cutting-edge technology, it helps thousands of smart sports bettors and traders find profitable sure bets & arbitrage opportunities, guaranteeing daily profits. Arb Amigo scans through millions of odds per minute and hundreds of bookies to find sure bets and arbitrage betting opportunities, ensuring you win regardless of the outcome. Whether you're looking to make a side income or a full-time income, Arb Amigo has got you covered, making sports betting a smart and predictable way to profit.",
    },
    {
      name: "Goat Amigo",
      url: "https://goat.footyamigo.com/",
      role: "Full stack developer",
      image: Goat,
      tech: "Svelte, Bootstrap, Express.js, MongoDB, Socket.io, AWS LAMBDA",
      description:
        "Goat Amigo is your ultimate destination for all things football, providing real-time updates on scores, schedules, and stats for matches worldwide. Whether you're a fan of the English Premier League, La Liga, Bundesliga, or a more obscure league in South America or Asia, Goat Amigo has you covered. With our live scores feature, you can easily track today's games and view detailed statistics for each match, including possession, shots, and corners. Our website is optimized for all devices, ensuring you stay updated on the latest football action wherever you are. Don't miss out on a single moment of the excitement - stay informed with Goat Amigo!",
    },
  ];
  return (
    <div className="anik-page-content-wrap">
      <div className="section-wrapper px-10 pt-60">
        <div className="anik-page-title-wrap mb-15">
          <h5 className="page-title text-[40px]">Portfolio</h5>
        </div>
      </div>

      <div className="section-wrapper pr-60 pl-60 mb-60">
        {lists.map((d, i) => (
          <div
            className={`flex flex-col p-4 ${i % 2 === 0 ? "bg-gray-50" : ""}`}
            key={i}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              <div className="flex lg:col-span-2">
                <Image
                  src={d.image}
                  alt="avatar"
                  placeholder="blur"
                  className="rounded-xl object-contain"
                />
              </div>
              <div className="flex flex-col lg:col-span-3">
                <a
                  href={d.url}
                  target="_blank"
                  className="text-gray-700 text-center text-2xl font-semibold hover:underline"
                >
                  {d.name}
                </a>
                <p>
                  <span className=" text-lg font-semibold">Role: </span>
                  {d.role}
                </p>
                <p>
                  <span className=" text-lg font-semibold">Technology: </span>
                  {d.tech}
                </p>
              </div>
            </div>
            <div className="mt-2">
              <span className=" text-lg font-semibold">Description: </span>
              <div dangerouslySetInnerHTML={{ __html: d.description }}></div>
            </div>
          </div>
        ))}
        {/* <div className="flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <h3 className="text-gray-800 text-center">Arb Amigo</h3>
              <p className="text-gray-800">
                Arb Amigo™ is the #1 tool for daily risk-free betting profits.
                With its cutting-edge technology, it helps thousands of smart
                sports bettors and traders find profitable sure bets & arbitrage
                opportunities, guaranteeing daily profits. Arb Amigo scans
                through millions of odds per minute and hundreds of bookies to
                find sure bets and arbitrage betting opportunities, ensuring you
                win regardless of the outcome. Whether you're looking to make a
                side income or a full-time income, Arb Amigo has got you
                covered, making sports betting a smart and predictable way to
                profit.
              </p>
            </div>
            <div className="flex">
              <Image
                src={ArbAmigo}
                alt="avatar"
                placeholder="blur"
                className="rounded-xl object-contain"
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
