import React, { useEffect } from "react";
import { useState } from "react";
import MovieSlider from "@/components/MovieSlider";

function Movie() {
  const [dimensions, setDimensions] = useState({ width: 1120, height: 630 });

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const newWidth = windowWidth * 0.8;
      const newHeight = newWidth * (9 / 16);
      setDimensions({ width: newWidth, height: newHeight });
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      Movie
      <div className="flex justify-center align-middle">
        <iframe
          width={dimensions.width}
          height={dimensions.height}
          src="https://www.youtube.com/embed/2-DveXcbwZc?si=t-IDlXidesyITLcP"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <MovieSlider></MovieSlider>
    </div>
  );
}

export default Movie;
