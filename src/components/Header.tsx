import React from "react";
import Navigation from "./Navigation";
import Link from "next/link";

function Header() {
  return (
    <header className="py-5 px-5 border flex justify-between">
      <Link href="/" className="hover:text-accent">
        <h1>NATSUKI NAKAYAMA</h1>
      </Link>
      <Navigation></Navigation>
    </header>
  );
}

export default Header;
