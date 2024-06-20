import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <div className="flex gap-4">
      <Link className=" hover:text-accent" href="/">
        Top
      </Link>
      <Link className=" hover:text-accent" href="/news">
        News
      </Link>
      <Link className=" hover:text-accent" href="/gallery">
        Gallery
      </Link>
      <Link className=" hover:text-accent" href="/profile">
        Profile
      </Link>
    </div>
  );
}

export default Navigation;
