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
      <div className="flex border-b-2">
        <Link href={"/gallery"}>
          <h1 className="pl-5 text-4xl mt-6 hover:text-accent">Movie</h1>
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
            500: { slidesPerView: 3 },
            800: { slidesPerView: 4 },
            1100: { slidesPerView: 5 },
            1400: { slidesPerView: 5 },
          }}
        >
          {movieList.map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
                <div className="flex">
                  <Link href={`/movie/${movie.contentDetails.videoId}`}>
                    <Image
                      src={movie.snippet.thumbnails.standard.url}
                      width={movie.snippet.thumbnails.standard.width}
                      height={movie.snippet.thumbnails.standard.height}
                      alt="movie"
                      className="hover:opacity-80"
                    ></Image>
                  </Link>
                </div>
                <div className="flex">
                  <Link href={`/movie/${movie.contentDetails.videoId}`}>
                    <h2 className="text-xl hover:text-accent">
                      {movie.snippet.title}
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

export default MovieSlider;
