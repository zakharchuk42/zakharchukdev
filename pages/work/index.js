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
        <div className={`flex flex-col lg:flex-row gap-x-8`}>
          <div
            className={`text-center flex xl:w-[30vw] flex-col lg:text-left mb-4`}
          >
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial={`hidden`}
              animate={`show`}
              exit={`hidden`}
              className={`h3 xl:h2`}
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
              <span className={`text-accent`}><a href={"https://med-map.vercel.app/"} target={"_blank"}>1. Med-map.</a></span> Bring all your
              medical docs and plans to one place.
              <br />
              <span className={`text-accent`}><a href={"https://cheat-sh.vercel.app"} target={"_blank"}>2. Cheat Sheets.</a></span> Education site.
              <br />
              <span className={`text-accent`}><a href={"https://zakharchuk42.github.io/readme-charm/#generate-readme"} target={"_blank"}>3. ReadME Charm.</a></span> This site will help you generate Markdown markup for your README.md file.
              <br />
              <span className={`text-accent`}><a href={"https://zakharchuk42.github.io/unsolved-case"} target={"_blank"}>4. Unsolved.</a></span> Dive deep into
              the first-face detective story.
              <br />
              <span className={`text-accent`}><a href={"https://zakharchuk42.github.io/rick-and-morty/"} target={"_blank"}>5. Rick&Morty.</a></span> Library of
              characters from this great series.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial={`hidden`}
            animate={`show`}
            exit={`hidden`}
            className={`w-full sm:w-[60%] lg:w-[40%] mx-auto`}
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
