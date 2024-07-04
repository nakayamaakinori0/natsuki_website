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
      <Link href={"gallery/"}>
        <h1 className="text-4xl mt-6 border-b-2">PaintingSlider</h1>
      </Link>
      <div
        className="
            [&_.swiper-button-prev]:text-secondary
            [&_.swiper-button-next]:text-secondary
            [&_.swiper-pagination-bullet-active]:!bg-secondary"
      >
        <Swiper
          spaceBetween={15}
          slidesPerView={2}
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
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
                <Link href={`/painting/${content.id}`}>
                  <div className="sm:w-[300px] sm:h-[300px] xl:w-[400px] xl:h-[400px]">
                    <Image
                      className="mt-2"
                      src={content.image.url}
                      fill
                      style={{ objectFit: "contain" }}
                      alt="painting"
                    ></Image>
                  </div>
                </Link>
                <Link href={`/painting/${content.id}`}>
                  <h2 className="text-xl mt-4">{content.title}</h2>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default PaintingSlider;
