import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function Carousel() {
  return (
    <div
      className="[&_.swiper]:h-lvh
        [&_.swiper-button-prev]:text-secondary
        [&_.swiper-button-next]:text-secondary
        [&_.swiper-pagination-bullet-active]:!bg-secondary"
    >
      <Swiper
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        speed={1000}
      >
        <SwiperSlide style={{ height: "auto" }}>
          <Image
            alt="painting"
            src="/while_painting.jpg"
            layout="fill"
            objectFit="contain"
          ></Image>
        </SwiperSlide>
        <SwiperSlide style={{ height: "auto" }}>
          <Image
            alt="painting"
            src="/profile_picture.jpg"
            layout="fill"
            objectFit="contain"
          ></Image>
        </SwiperSlide>
        <SwiperSlide style={{ height: "auto" }}>
          <Image
            alt="painting"
            src="/c25ca802-f089-416c-8fdc-8d0d5a388070.png"
            layout="fill"
            objectFit="contain"
          ></Image>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
