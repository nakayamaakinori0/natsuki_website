import React, { useEffect } from "react";
import { useState } from "react";
import MovieSlider from "@/components/MovieSlider";
import { NextRouter, useRouter } from "next/router";
import { GetRequestOptions, PlaylistItem, PlaylistItems } from "@/type";
import YoutubePlayer from "@/components/YoutubePlayer";

function Movie() {
  const [movie, setMovie] = useState<PlaylistItem>();
  const router: NextRouter = useRouter();
  const movieId: string = router.query.id as string;

  // fetch movie data
  useEffect(() => {
    const requestOptions: GetRequestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const func = async () => {
      const res = await fetch(`/api/movie/${movieId}`, requestOptions);
      const data: PlaylistItems = await res.json();
      setMovie(data.items[0]);
    };
    if (movieId) func();
  }, [movieId]);

  if (!movieId) return null;

  return (
    <div>
      <div className="mt-6 flex flex-col items-center">
        <YoutubePlayer movieId={movieId}></YoutubePlayer>
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
