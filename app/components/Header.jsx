import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <div className="flex justify-center align-center content-center bg-[#3B82F6] h-10">
        <div className="">
          <Link href="/">Nextjs </Link>
          <Link href="/about">About</Link>
          <Link href="/about/aboutMe">AboutMe</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
