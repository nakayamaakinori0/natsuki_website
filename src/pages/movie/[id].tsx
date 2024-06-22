import React, { useEffect, useRef } from "react";
import { useState } from "react";
import MovieSlider from "@/components/MovieSlider";
import { NextRouter, useRouter } from "next/router";
import { GetRequestOptions } from "@/type";

type Movie = {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      standard: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
};

function Movie() {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  const playerRef = useRef<YT.Player | null>(null);
  const [movie, setMovie] = useState<Movie>();
  const router: NextRouter = useRouter();
  const movieId: string | undefined =
    typeof router.query.id !== "string" ? undefined : router.query.id;

  const loadYoutubeAPI = (movieId: string) => {
    if (window.YT) {
      const initialWidth = window.innerWidth < 1200 ? window.innerWidth : 1200;
      playerRef.current = new YT.Player("player", {
        height: initialWidth * (9 / 16),
        width: initialWidth,
        videoId: movieId,
        playerVars: {
          autoplay: 1,
          color: "white",
          modestbranding: 1,
          rel: 0,
          origin: window.location.origin,
          controls: 0,
        },
      });
    } else {
      var tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        const initialWidth =
          window.innerWidth < 1200 ? window.innerWidth : 1200;
        playerRef.current = new YT.Player("player", {
          height: initialWidth * (9 / 16),
          width: initialWidth,
          videoId: movieId,
          playerVars: {
            autoplay: 1,
            color: "white",
            modestbranding: 1,
            rel: 0,
            controls: 0,
            disablekb: 1,
            start: 0,
          },
        });
      };
    }
  };

  const initializePlayer = (movieId: string) => {
    if (playerRef.current) {
      playerRef.current.destroy();
      window.onYouTubeIframeAPIReady = null;
      playerRef.current = null;
    }
    loadYoutubeAPI(movieId);
  };

  const calculatePlayerSize = () => {
    const newWidth = window.innerWidth < 1200 ? window.innerWidth : 1200;
    const newHeight = newWidth * (9 / 16);
    setDimensions({ width: newWidth, height: newHeight });
  };

  // make player
  useEffect(() => {
    if (movieId) {
      initializePlayer(movieId);
    }
  }, [movieId]);

  // fetch movie data
  useEffect(() => {
    const requestOptions: GetRequestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const youtubeURL = process.env.NEXT_PUBLIC_YOUTUBE_URL;
    const youtubeAPIKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

    const func = async () => {
      const res = await fetch(
        `${youtubeURL}/videos?part=snippet&key=${youtubeAPIKey}&id=${movieId}`,
        requestOptions
      );
      const data = await res.json();
      setMovie(data.items[0]);
    };
    if (movieId) func();
  }, [movieId]);

  //  calculate player size
  useEffect(() => {
    window.addEventListener("resize", calculatePlayerSize);
    calculatePlayerSize();
    return () => {
      window.removeEventListener("resize", calculatePlayerSize);
    };
  }, []);

  // set player size
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.setSize(dimensions.width, dimensions.height);
    }
  }, [dimensions]);

  return (
    <div>
      <div className="flex flex-col items-center">
        <div id="player"></div>
      </div>
      <div>
        {movie && (
          <div>
            <h1>{movie.snippet.title}</h1>
            <p>{movie.snippet.description}</p>
          </div>
        )}
      </div>
      <MovieSlider></MovieSlider>
    </div>
  );
}
export default Movie;
