import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import ServiceSlider from "../../components/ServiceSlider";

const Skills = () => {
  return (
    <div className={`h-full bg-primary/30 py-36 flex items-center`}>
      <Circles />
      <div className={`container mx-auto`}>
        <div className={`flex flex-col xl:flex-row gap-x-8`}>
          <div
            className={`text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0`}
          >
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial={`hidden`}
              animate={`show`}
              exit={`hidden`}
              className={`h2 xl:mt-8`}
            >
              My skills<span className={`text-accent`}>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial={`hidden`}
              animate={`show`}
              exit={`hidden`}
              className={`mb-4 max-w-[400px] mx-auto lg:mx-0`}
            >
              I have 3 years of experience in frontend programming. I work
              tightly with backend technologies. Self-education is constantly
              part of my routine. I like to see progress in my skills as much as
              I like to see how my new approaches have a useful impact on
              resolving development problems.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial={`hidden`}
            animate={`show`}
            exit={`hidden`}
            className={`w-full xl:max-w-[65%]`}
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Skills;
