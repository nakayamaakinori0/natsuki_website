import React from "react";
import Link from "next/link";
import Signature from "./Signature";

function Footer() {
  return (
    <footer className="px-5 mt-6 border flex justify-between gap-2 ">
      <div className="flex  items-center gap-2">
        <Link href="/" className="hover:bg-accent">
          <div className="flex">
            <div className="i-simple-icons-facebook w-10 h-10"></div>
          </div>
        </Link>
        <Link href="/" className="hover:bg-accent">
          <div className="flex">
            <div className="i-simple-icons-instagram w-10 h-10"></div>
          </div>
        </Link>
        <Link href="/" className="hover:bg-accent">
          <div className="flex">
            <div className="i-simple-icons-x w-10 h-10"></div>
          </div>
        </Link>
        <Link href="/" className="hover:bg-accent">
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
