import React from "react";
import { BiRightArrow } from "react-icons/bi";

interface NavLink {
  name: string;
}

const Navbar = () => {
  const links: NavLink[] = [
    { name: "Introduction" },
    { name: "Story" },
    { name: "Characters" },
    { name: "Staffs" },
  ];
  return (
    <nav className="inline-flex uppercase items-center justify-center w-full h-20 bg-zinc-900 text-white px-6 fixed top-0 outline outline-zinc-900 outline-2 outline-offset-4">
      <div className="font-black flex-auto text-lg cursor-pointer">
        Heart of darkness
      </div>
      <div className="items-center space-x-4 hidden md:inline-flex">
        {links.map((link, i) => {
          return (
            <div
              key={i}
              className="inline-flex gap-1 justify-center items-center hover:text-red-600 text-zinc-900 cursor-pointer"
            >
              <BiRightArrow />
              <p className="text-white">{link.name}</p>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
