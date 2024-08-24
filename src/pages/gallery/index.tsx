import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import {
  GetRequestOptions,
  PaintingList,
  PlaylistItem,
  PaintingType,
} from "@/type";

function Gallery() {
  const [movieList, setMovieList] = useState<PlaylistItem[]>([]);
  const [paintingList, setPaintingList] = useState<PaintingType[]>([]);

  useEffect(() => {
    const func = async () => {
      const res = await fetch("/api/painting/list");
      const data: PaintingList = await res.json();
      setPaintingList(data?.contents);
    };
    func();
  }, []);

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

  if (!movieList || !paintingList) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="pl-5 text-4xl mt-6 border-b-2">Painting</h1>
      <div className="px-10 grid grid-cols-3 gap-4">
        {paintingList.map((painting) => {
          return (
            <div key={painting.id}>
              <div>
                <Link href={`/painting/${painting.id}`}>
                  <div className="relative w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] xl:w-[300px] xl:h-[300px]">
                    <Image
                      className="mt-2 hover:opacity-80"
                      src={painting.image.url}
                      fill
                      style={{ objectFit: "contain" }}
                      alt="painting"
                    ></Image>
                  </div>
                </Link>
              </div>
              <div className="flex">
                <Link href={`/painting/${painting.id}`}>
                  <h2 className="text-xl mt-4 hover:text-accent">
                    {painting.title}
                  </h2>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-4xl mt-6 border-b-2">Movie</h1>
      <div className="grid grid-cols-3 gap-4">
        {movieList.map((movie) => {
          return (
            <div key={movie.id}>
              <div>
                <Link href={`/movie/${movie.contentDetails.videoId}`}>
                  <Image
                    className="mt-2 hover:opacity-80"
                    src={movie.snippet.thumbnails.standard.url}
                    width={movie.snippet.thumbnails.standard.width}
                    height={movie.snippet.thumbnails.standard.height}
                    alt="painting"
                  ></Image>
                </Link>
              </div>
              <div>
                <Link href={`/movie/${movie.contentDetails.videoId}`}>
                  <h2 className="text-xl mt-2 hover:text-accent">
                    {movie.snippet.title}
                  </h2>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
