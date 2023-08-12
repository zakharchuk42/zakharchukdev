import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Bulb from "../../components/Bulb";
import WorkSlider from "../../components/WorkSlider/WorkSlider";

const Work = () => {
  return (
    <div className={`h-full bg-primary/30 py-36 flex items-center`}>
      <Circles />
      <div className={`container mx-auto`}>
        <div className={`flex flex-col xl:flex-row gap-x-8`}>
          <div
            className={`text-center flex xl:w-[30vw] flex-col lg:text-left mb-4`}
          >
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial={`hidden`}
              animate={`show`}
              exit={`hidden`}
              className={`h2 xl:mt-12`}
            >
              My works<span className={`text-accent`}>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial={`hidden`}
              animate={`show`}
              exit={`hidden`}
              className={`mb-4 max-w-[400px] mx-auto xl:mx-0`}
            >
              Here you can see my latest Pet-project.
              <br />
              <span className={`text-accent`}>1. Med-map.</span> Bring all your
              medical docs and plans to one place.
              <br />
              <span className={`text-accent`}>2. Unsolved.</span> Dive deep into
              the first-face detective story.
              <br />
              <span className={`text-accent`}>3. Rick&Morty.</span> Library of
              characters from this great series.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial={`hidden`}
            animate={`show`}
            exit={`hidden`}
            className={`w-full xl:max-w-[65%]`}
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
