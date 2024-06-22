import React, { useEffect } from "react";
import { useState } from "react";
import { client } from "@/libs/client";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  type: string;
};

function PaintingSlider() {
  const [paintingList, setPaintingList] = useState<any[]>([]);
  useEffect(() => {
    const func = async () => {
      const res = await client.get({ endpoint: "painting_list" });
      setPaintingList(res?.contents);
    };
    func();
  }, []);

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
          spaceBetween={0}
          slidesPerView={3}
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
        >
          {paintingList.map((content) => {
            return (
              <SwiperSlide key={content.id}>
                <Link href={`/painting/${content.id}`}>
                  <Image
                    className="mt-2"
                    src={content.image.url}
                    width={300}
                    height={300}
                    alt="painting"
                  ></Image>
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
