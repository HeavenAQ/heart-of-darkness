import React from "react";
import Image from "next/image";
import { BiRightArrow } from "react-icons/bi";
import ToggleListIcon from "./ToggleListIcon";

export interface NavLink {
  name: string;
  path: string;
}

const links: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "Introduction", path: "/introduction" },
  { name: "Story", path: "/story" },
  { name: "Characters", path: "/characters" },
  { name: "Staff", path: "/staff" },
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

const DropDownList = () => <ToggleListIcon navItems={links} />;

const Navbar = () => {
  return (
    <nav className="inline-flex uppercase items-center justify-center w-full h-20 bg-zinc-900 text-white px-6 fixed top-0 outline outline-zinc-900 outline-2 outline-offset-4">
      <div className="font-black flex-auto text-lg cursor-pointer">
        <Image
          className="md:w-[150px] md:h-auto w-28 h-auto"
          src="/home/logo-death.png"
          alt="logo"
          width={150}
          height={150}
        />
      </div>
      <div className="items-center space-x-4 hidden lg:inline-flex">
        {ArrowOnHoverList(links, "")}
      </div>
      {DropDownList()}
    </nav>
  );
};

const HomePageNav = () => {
  return (
    <div className="lg:flex flex-col items-start gap-5 justify-center w-full h-[89%] lg:py-0 py-20 bg-zinc-900 outline outline-offset-4 outline-2 outline-zinc-900 pl-5 rounded-lg hidden">
      {ArrowOnHoverList(links, "text-2xl")}
    </div>
  );
};

export { Navbar, HomePageNav, ArrowOnHoverList, DropDownList };
