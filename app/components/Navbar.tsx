import React from "react";
import { BiRightArrow } from "react-icons/bi";

interface NavLink {
  name: string;
  path: string;
}

const links: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "Introduction", path: "/introduction" },
  { name: "Story", path: "/story" },
  { name: "Characters", path: "/characters" },
  { name: "Staffs", path: "/staffs" },
];

const ArrowOnHoverList = (links: NavLink[], modifiedStyle: string) => {
  return links.map((link, i) => {
    return (
      <a key={i} href={link.path}>
        <div
          className={`inline-flex gap-1 justify-center items-center hover:text-red-600 text-zinc-900 cursor-pointer ${modifiedStyle}`}
        >
          <BiRightArrow />
          <p className="text-white">{link.name}</p>
        </div>
      </a>
    );
  });
};

const Navbar = () => {
  return (
    <nav className="inline-flex uppercase items-center justify-center w-full h-20 bg-zinc-900 text-white px-6 fixed top-0 outline outline-zinc-900 outline-2 outline-offset-4">
      <div className="font-black flex-auto text-lg cursor-pointer">
        Heart of darkness
      </div>
      <div className="items-center space-x-4 hidden md:inline-flex">
        {ArrowOnHoverList(links, "")}
      </div>
    </nav>
  );
};

const Menu = () => {
  return (
    <div className="flex flex-col items-start gap-8 justify-center w-full h-full bg-zinc-900 outline outline-offset-4 outline-2 outline-zinc-900 pl-5">
      {ArrowOnHoverList(links, "text-3xl")}
    </div>
  );
};

export { Navbar, Menu };
