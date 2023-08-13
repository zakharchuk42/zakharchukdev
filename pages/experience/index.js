import React, { useState } from "react";
import Circles from "../../components/Circles";
import Avatar from "../../components/Avatar";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const aboutData = [
  {
    title: "Hivex",
    info: [
      {
        title: "Frontend developer",
        years: "12.2022 - now",
        stack:
          "React, Next.js, TypeScript, SSR, GraphQL, Storybook, Jest, Antd",
        work: [
          "Worked on 'Documents' microservice. Automation workflow with documents",
          "Took part at architecture build process",
          "Wrote Jest tests for components",
          "Participated of code review",
          "Implemented the logic of deleting, creating a document.",
        ],
      },
    ],
  },
  {
    title: "GetWin",
    info: [
      {
        title: "Frontend developer",
        years: "04.2022 - 12.2022 (9m)",
        stack: "React, React hooks, ReduxToolkit, axios, Webpack, SASS",
        work: [
          "Worked with endpoints for frontend and backend interaction (REST API)",
          "Connected the mail service for communication within the CRM and with other mailboxes",
          "Built a calendar to schedule tasks with notifications, time allocation, and categories using the latest Date-fns libraries",
          "Implemented the functionality of sections: basket, archive, change log",
        ],
      },
    ],
  },
  {
    title: "GMG",
    info: [
      {
        title: "Frontend developer",
        years: "04.2021 - 02.2023 (1y 11m)",
        stack:
          "React, React hooks, Redux, Redux-thunk, axios, SASS, MaterialUI",
        work: [
          "Used Rest API for the layout of financial sites",
          "A website was created based on layouts of various topics, for example: finance, education, online store, travel booking",
          "Built website based on layouts from Figma",
        ],
      },
    ],
  },
  {
    title: "Hot Sales",
    info: [
      {
        title: "HTML Coder",
        years: "09.2020 - 02.2021 (6m)",
        stack: "React, React hooks, SASS, MaterialUI, Bootstrap",
        work: ["Built website based on layouts from Figma"],
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className={`h-full bg-primary/30 py-32 text-center xl:text-left`}>
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial={`hidden`}
        animate={`show`}
        exit={`hidden`}
        className={`hidden xl:flex w-[737px] h-[678px] absolute bottom-0 -left-[320px]`}
      >
        <Avatar />
      </motion.div>
      <div
        className={`container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 z-1 relative`}
      >
        <div className={`flex-1 flex flex-col justify-center`}>
          <motion.h2
            className={`h2`}
            variants={fadeIn("right", 0.2)}
            initial={`hidden`}
            animate={`show`}
            exit={`hidden`}
          >
            My <span className={`text-accent`}>work</span>
            <br />
            experience<span className={`text-accent`}>.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial={`hidden`}
            animate={`show`}
            exit={`hidden`}
            className={`max-w-[500xp] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0`}
          >
            4 years ago, I began freelancing as a developer. Since then, I`ve
            gained 3 years of commercial
            experience with JavaScript (React, Next, Redux). I went through
            different types of teams like an outsource, outstaff, and product.
            Took part in developing both SPA, CRMs, booking, shops, and
            landings. Now, I am looking for a new opportunity to improve my
            skills.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial={`hidden`}
            animate={`show`}
            exit={`hidden`}
            className={`hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8`}
          ></motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial={`hidden`}
          animate={`show`}
          exit={`hidden`}
          className={`flex flex-col w-full xl:max-w-[48%] h-[480px]`}
        >
          <div className={`flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4`}>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div
            className={`py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start`}
          >
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`flex-1 flex flex-col max-w-max gap-x-2 gap-y-3 text-white/60`}
                >
                  <div
                    className={`font-light mb-2 md:mb-0 flex justify-between`}
                  >
                    <p>{item.title}</p>
                    <p className={`text-accent font-semibold`}>{item.years}</p>
                  </div>
                  <div className={`flex flex-col gap-y-3`}>
                    <div>
                      <div className={`text-accent font-semibold`}>
                        Stack used:
                      </div>
                      <div>{item.stack}</div>
                    </div>
                    <div>
                      <div className={`text-accent font-semibold`}>I do:</div>
                      <div>
                        {item.work.map((item, idx) => {
                          return <div key={idx}>- {item};</div>;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
