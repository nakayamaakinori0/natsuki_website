import React, { useState, useRef, useEffect, useCallback } from "react";

declare global {
  interface Window {
    onYouTubeIframeAPIReady: (() => void) | undefined | null;
  }
}

type Props = { movieId: string };

function YoutubePlayer({ movieId }: Props) {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  const playerRef = useRef<YT.Player | null>(null);

  const initialPlayerWidth = ((): number | null => {
    if (!window) return null;
    return window.innerWidth < 1200 ? window.innerWidth : 1200;
  })();

  const playerOptions = ((): YT.PlayerOptions | undefined => {
    if (!window || !initialPlayerWidth || !movieId) return undefined;
    return {
      height: initialPlayerWidth * (9 / 16),
      width: initialPlayerWidth,
      videoId: movieId,
      playerVars: {
        autoplay: 1,
        color: "white",
        modestbranding: 1,
        rel: 0,
        controls: 1,
        disablekb: 0,
      },
    };
  })();

  const loadYoutubeAPI = useCallback(() => {
    // movieページ内で他のメタに遷移した時はプレイヤーを再生成する(iFrameAPIがロード済みの時)
    if (window.YT) {
      playerRef.current = new YT.Player("player", playerOptions);
    } else {
      // Loads Iframe Player API asynchronously
      var tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      // iframe Player APIがロードされたら自動的にonYouTubeIframeAPIReadyが実行される
      window.onYouTubeIframeAPIReady = () => {
        playerRef.current = new YT.Player("player", playerOptions);
      };
    }
  }, [playerOptions, playerRef]);

  const initializePlayer = useCallback(() => {
    console.log("initializePlayer");
    if (playerRef.current) {
      playerRef.current.destroy();
      window.onYouTubeIframeAPIReady = null;
      playerRef.current = null;
    }
    loadYoutubeAPI();
  }, [loadYoutubeAPI, playerRef]);

  const calculatePlayerSize = () => {
    // スマホのブラウザの検索窓の表示可否でresizeイベントが発火し、プレイヤーが再生成されてしまうので、幅に変更があったときだけ、dimensionsを更新する
    const newWidth = window.innerWidth < 1100 ? window.innerWidth : 1100;
    const newHeight = newWidth * (9 / 16);
    setDimensions({ width: newWidth, height: newHeight });
  };

  // make player
  useEffect(() => {
    if (movieId && window) {
      initializePlayer();
    }
  }, [movieId, initializePlayer]);

  //  calculate player size
  useEffect(() => {
    if (!window) return;
    calculatePlayerSize();
  }, []);

  // set player size
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.setSize(dimensions.width, dimensions.height);
    }
  }, [dimensions]);

  return (
    <>
      <div id="player"></div>
    </>
  );
}

export default YoutubePlayer;
