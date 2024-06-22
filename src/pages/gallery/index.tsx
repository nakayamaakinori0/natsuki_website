import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { GetRequestOptions } from "@/type";
import { client } from "@/libs/client";

function Gallery() {
  const [movieList, setMovieList] = useState<any[]>([]);
  const [paintingList, setPaintingList] = useState<any[]>([]);

  useEffect(() => {
    const func = async () => {
      const res = await client.get({ endpoint: "painting_list" });
      setPaintingList(res?.contents);
    };
    func();
  }, []);

  useEffect(() => {
    const requestOptions: GetRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const youtubeURL = process.env.NEXT_PUBLIC_YOUTUBE_URL;
    const youtubeAPIKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    const youtubePlaylistID = process.env.NEXT_PUBLIC_PLAYLIST_ID;

    const func = async () => {
      const res = await fetch(
        `${youtubeURL}/playlistItems?part=contentDetails,id,snippet,status&playlistId=${youtubePlaylistID}&key=${youtubeAPIKey}&maxResults=10`,
        requestOptions
      );
      const data = await res.json();
      setMovieList(data.items);
    };
    func();
  }, []);

  return (
    <div>
      <h1 className="text-4xl mt-6 border-b-2">Painting</h1>
      <div className="grid grid-cols-3 gap-4">
        {paintingList.map((painting) => {
          return (
            <div>
              <div>
                <Link href={`/painting/${painting.id}`}>
                  <Image
                    className="mt-2"
                    src={painting.image.url}
                    width={300}
                    height={300}
                    alt="painting"
                  ></Image>
                </Link>
              </div>
              <div>
                <Link href={`/painting/${painting.id}`}>
                  <h2 className="text-xl mt-4">{painting.title}</h2>
                </Link>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    painting.description.length > 20
                      ? `${painting.description.substring(0, 20)}.....`
                      : painting.description,
                }}
              ></div>
            </div>
          );
        })}
      </div>
      <h1 className="text-4xl mt-6 border-b-2">Movie</h1>
      <div className="grid grid-cols-3 gap-4">
        {movieList.map((movie) => {
          return (
            <div>
              <div>
                <Link href={`/movie/${movie.contentDetails.videoId}`}>
                  <Image
                    className="mt-2"
                    src={movie.snippet.thumbnails.standard.url}
                    width={300}
                    height={300}
                    alt="painting"
                  ></Image>
                </Link>
              </div>
              <div>
                <Link href={`/movie/${movie.contentDetails.videoId}`}>
                  <h2 className="text-xl mt-4">{movie.snippet.title}</h2>
                </Link>
              </div>
              <div>
                {movie.snippet.description.length > 20
                  ? `${movie.snippet.description.substring(0, 20)}.....`
                  : movie.snippet.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
