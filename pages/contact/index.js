import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Avatar from "../../components/Avatar";
import React from "react";
import Bulb from "../../components/Bulb";
import Link from "next/link";
import { RiMailLine, RiLinkedinBoxLine, RiTelegramLine } from "react-icons/ri";

const Contact = () => {
  return (
    <div className={`h-full bg-primary/30 py-32 text-center xl:text-left`}>
      <Bulb />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial={`hidden`}
        animate={`show`}
        exit={`hidden`}
        className={`hidden xl:flex w-[550px] justify-end h-auto absolute bottom-0 right-0`}
      >
        <Avatar />
      </motion.div>
      <div
        className={`container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 z-1 relative`}
      >
        <div className={`flex-1 flex flex-col h-[480px]`}>
          <motion.h2
            className={`h2`}
            variants={fadeIn("left", 0.2)}
            initial={`hidden`}
            animate={`show`}
            exit={`hidden`}
          >
            My contacts<span className={`text-accent`}>.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial={`hidden`}
            animate={`show`}
            exit={`hidden`}
            className={`max-w-[500xp] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0`}
          >
            If you like my works and personality feel free to reach out to me
            through my contacts.
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
          variants={fadeIn("up", 0.4)}
          initial={`hidden`}
          animate={`show`}
          exit={`hidden`}
          className={`flex flex-col w-full gap-y-4 xl:max-w-[48%] h-[480px]`}
        >
          <Link
            href={"https://www.linkedin.com/in/vit-zakharchuk/"}
            className={`flex gap-x-4 items-center hover:text-accent transition-all duration-300`}
            target={`_blank`}
          >
            <RiLinkedinBoxLine className={`text-[46px]`} />
            <div className={`text-[36px]`}>
              LinkedIn<span className={`text-accent`}>.</span>
            </div>
          </Link>

          <Link
            href={"https://t.me/zkh_42"}
            className={`flex gap-x-4 items-center hover:text-accent transition-all duration-300`}
            target={`_blank`}
          >
            <RiTelegramLine className={`text-[46px]`} />
            <div className={`text-[36px]`}>
              Telegram<span className={`text-accent`}>.</span>
            </div>
          </Link>

          <Link
            href={""}
            className={`flex gap-x-4 items-center hover:text-accent transition-all duration-300`}
          >
            <RiMailLine className={`text-[46px]`} />
            <div className={`text-[36px]`}>vit.zakharchuk@gmail.com</div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
