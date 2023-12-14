import { navLinks } from "@/constants/navLinks";
import { ROUTS } from "@/constants/routs";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex items-center px-10 py-4">
      <Link href={ROUTS.home}>
        <p className="text-2xl font-semibold text-primary"> ST PIZZA</p>
      </Link>
      <nav className="flex-1">
        <ul
          className="
      flex 
      items-center
      justify-end
      gap-8
      font-semibold
      capitalize
    text-gray-500
      "
        >
          {Object.entries(navLinks).map(([nameLink, link]) => (
            <li
              key={nameLink}
              className="
              transition 
              duration-200
              ease-in-out
              last:rounded-full
              last:bg-primary 
            last:px-8
            last:py-1
          last:text-white
          hover:text-primary
            hover:underline
            last:hover:text-white"
            >
              <Link href={link}>{nameLink}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
