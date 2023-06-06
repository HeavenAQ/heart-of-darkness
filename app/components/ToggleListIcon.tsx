"use client";
import { FC, Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "./data/routes";
import { ArrowOnHoverList } from "./Navbar";

interface PageProps {
  navItems: NavLink[];
}

const ToggleListIcon: FC<PageProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="relative inline-block text-left lg:hidden">
      <Menu.Button
        className="hover:bg-zinc-700 cursor-pointer flex items-center justify-center relative rounded-lg duration-200 p-[0.6rem]"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 -bottom-48 divide-zinc-100 rounded-md bg-zinc-900 flex flex-col p-1 border border-zinc-600">
          <Menu.Item>
            <div className="w-full rounded-md p-1 pl-2 font-black">Content</div>
          </Menu.Item>
          {ArrowOnHoverList(navItems, "").map((link, i) => (
            <Menu.Item key={i}>{link}</Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ToggleListIcon;
