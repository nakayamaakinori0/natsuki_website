import React from "react";
import Link from "next/link";
import Signature from "./Signature";
import config from "@/libs/config";

function Footer() {
  return (
    <footer className="px-5 mt-6 border flex justify-between gap-2 ">
      <div className="flex items-center gap-2">
        <Link
          target="_blank"
          href={config.INSTAGRAM_SNS_URL}
          className="hover:bg-accent"
        >
          <div className="flex">
            <div className="i-simple-icons-instagram w-10 h-10"></div>
          </div>
        </Link>
        <Link
          target="_blank"
          href={config.X_SNS_URL}
          className="hover:bg-accent"
        >
          <div className="flex">
            <div className="i-simple-icons-x w-10 h-10"></div>
          </div>
        </Link>
        <Link
          target="_blank"
          href={config.YOUTUBE_SNS_URL}
          className="hover:bg-accent"
        >
          <div className="flex">
            <div className="i-simple-icons-youtube w-10 h-10"></div>
          </div>
        </Link>
      </div>
      <Signature></Signature>
    </footer>
  );
}

export default Footer;
