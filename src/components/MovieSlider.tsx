import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { GetRequestOptions } from "@/type";

function MovieSlider() {
  const [movieList, setMovieList] = useState<any[]>([]);

  useEffect(() => {
    const requestOptions: GetRequestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const func = async () => {
      const res = await fetch(`/api/movie/list`, requestOptions);
      const data = await res.json();
      setMovieList(data.items);
    };
    func();
  }, []);

  return (
    <div>
      <Link href={"/gallery"}>
        <h1 className="text-4xl mt-6 border-b-2">MovieSlider</h1>
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
            500: { slidesPerView: 3 },
            800: { slidesPerView: 4 },
            1100: { slidesPerView: 5 },
            1400: { slidesPerView: 5 },
          }}
        >
          {movieList.map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
                <Link href={`/movie/${movie.contentDetails.videoId}`}>
                  <Image
                    className=""
                    src={movie.snippet.thumbnails.standard.url}
                    width={320}
                    height={180}
                    alt="movie"
                  ></Image>
                </Link>
                <Link href={`/movie/${movie.contentDetails.videoId}`}>
                  <h2 className="text-xl ">{movie.snippet.title}</h2>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default MovieSlider;
