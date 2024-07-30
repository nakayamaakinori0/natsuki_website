import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PaintingList } from "@/type";

function PaintingSlider() {
  const [paintingList, setPaintingList] = useState<any[]>([]);

  useEffect(() => {
    const func = async () => {
      const res = await fetch("/api/painting/list");
      const data: PaintingList = await res.json();
      setPaintingList(data?.contents);
    };
    func();
  }, []);

  if (!paintingList) return <div>Loading...</div>;

  return (
    <div className="mt-20">
      <div className="flex border-b-2">
        <Link href={"gallery/"}>
          <h1 className="pl-5 text-4xl mt-6 hover:text-accent">Painting</h1>
        </Link>
      </div>
      <div
        className="
            [&_.swiper-button-prev]:text-secondary
            [&_.swiper-button-next]:text-secondary
            "
      >
        <Swiper
          spaceBetween={15}
          slidesPerView={2}
          modules={[Navigation, Pagination]}
          navigation
          breakpoints={{
            500: { slidesPerView: 2 },
            800: { slidesPerView: 3 },
            1100: { slidesPerView: 4 },
            1400: { slidesPerView: 4 },
          }}
        >
          {paintingList.map((content) => {
            return (
              <SwiperSlide key={content.id}>
                <div className="flex">
                  <Link href={`/painting/${content.id}`}>
                    <div className="relative w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] xl:w-[300px] xl:h-[300px]">
                      <Image
                        src={content.image.url}
                        fill
                        style={{ objectFit: "contain" }}
                        alt="painting"
                        className="mt-2 hover:opacity-80"
                      ></Image>
                    </div>
                  </Link>
                </div>

                <div className="flex">
                  <Link href={`/painting/${content.id}`}>
                    <h2 className="text-xl mt-4 hover:text-accent">
                      {content.title}
                    </h2>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default PaintingSlider;
