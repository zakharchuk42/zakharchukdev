import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";
import {
  HiOutlineColorSwatch,
  HiOutlineDatabase,
  HiOutlineDesktopComputer,
} from "react-icons/hi";
import {useRouter} from "next/router";

const serviceData = [
  {
    icon: <HiOutlineDesktopComputer />,
    title: "Frontend",
    description: [
      "React",
      "NextJS",
      "TypeScript",
      "ReduxToolkit",
      "Saga/Thunk",
      "Axios",
    ],
  },
  {
    icon: <HiOutlineDatabase />,
    title: "Backend",
    description: [
      "Nest.js",
      "Node.js",
      "GraphQL",
      "TypeORM",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    icon: <HiOutlineColorSwatch />,
    title: "Other",
    description: [
      "Storybook",
      "Jest",
      "Antd",
      "MUI",
      "HTML/CSS (SASS)",
      "Bootstrap",
    ],
  },
];

const ServiceSlider = () => {
  const router = useRouter()

  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className={`${router.pathname !== '/skills' && 'hidden'}`}
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index} className={`pb-14`}>
            <div
              className={`bg-[rgba(65,47,123,0.1)] h-max rounded-lg px-6 py-8 flex flex-col sm:gap-x-6 gap-x-0 group 
              cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300`}
            >
              <div className={`text-4xl text-accent mb-4`}>{item.icon}</div>
              <div className={`mb-2 text-lg`}>{item.title}</div>
              <div className={`max-w-[350px] leading-normal pl-1`}>
                {item?.description?.map((item, index) => {
                  return <p key={index}>- {item}</p>;
                })}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
