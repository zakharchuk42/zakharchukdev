import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import Slide from "./Slide";

// data
const workSlides = [
  {
    images: ["/thumb1.jpg", "/gitFront.jpg", "/gitBack.jpg"],
    links: [
      "https://med-map.vercel.app/",
      "https://github.com/zakharchuk42/med-map-client",
      "https://github.com/zakharchuk42/med-map-server",
    ],
    text: ["Watch,Site", "GitHub,Client", "GitHub,Server"],
  },
  {
    images: ["/thumb2.jpg", "/gitUns.jpg"],
    links: [
      "https://zakharchuk42.github.io",
      "https://github.com/zakharchuk42/zakharchuk42.github.io",
    ],
    text: ["Watch,Site", "GitHub,Frontend"],
  },
  {
    images: ["/thumb3.jpg", "/gitRick.jpg"],
    links: [
      "https://zakharchuk42.github.io/rick-and-morty/",
      "https://github.com/zakharchuk42/rick-and-morty",
    ],
    text: ["Watch,Site", "GitHub,Frontend"],
  },
];

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className={`h-[280px] sm:h-[480px]`}
    >
      {workSlides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <Slide
              images={slide.images}
              links={slide.links}
              text={slide.text}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
