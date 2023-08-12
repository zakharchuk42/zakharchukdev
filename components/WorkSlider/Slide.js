import React from "react";
import Image from "next/image";
import Hover from "./Hover";
import Link from "next/link";

const Slide = ({ images, links, text }) => {
  const isRowSpan = images.length === 3;
  return (
    <div
      className={`grid grid-cols-2 grid-rows-1 gap-4 cursor-pointer h-full pb-[46px]`}
    >
      {images.map((image, idx) => {
        return (
          <Link
            href={links[idx]}
            target={"_blank"}
            key={idx}
            className={`${
              idx === 0 && isRowSpan && "row-span-2"
            } relative rounded-lg overflow-hidden flex items-center justify-center group`}
          >
            <div
              className={`flex items-center justify-center relative overflow-hidden group`}
            >
              <Image src={image} width={500} height={435} alt={``} />
              <Hover text={text[idx]} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Slide;
