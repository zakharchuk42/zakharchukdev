import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Hover = ({ text }) => {
  const arrText = text.split(",");

  return (
    <>
      <div
        className={`absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all decoration-700`}
      ></div>
      <div
        className={`absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-[250%] transition-all duration-300`}
      >
        <div
          className={`flex items-center gap-x-2 text-[13px] tracking-[0.2em]`}
        >
          <div className={`delay-100`}>{arrText[0]}</div>
          <div
            className={`translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150`}
          >
            {arrText[1]}
          </div>
          <div
            className={`text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-500 delay-200`}
          >
            <BsArrowRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hover;
