import React from "react";
import { BiRightArrow } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";

export default function Footer() {
  const members: string[] = ["Heaven", "Steven", "Roger", "Wayne"];
  return (
    <footer className="flex flex-col gap-6 uppercase items-center justify-center w-full py-4 bg-zinc-900 text-white outline outline-zinc-900 outline-offset-4 outline-2">
      <div className="inline-flex gap-1 justify-center items-center hover:text-red-600 text-zinc-900 cursor-pointer">
        <BiRightArrow />
        <a className="text-4xl text-white" href="https://github.com/HeavenAQ">
          <IoLogoGithub />
        </a>
      </div>
      <div className="items-center space-x-4 inline-flex text-sm md:text-lg">
        {members.map((member, i) => {
          return (
            <div
              key={i}
              className="inline-flex gap-1 justify-center items-center hover:text-red-600 text-zinc-900 cursor-pointer"
            >
              <BiRightArrow />
              <p className="text-white">{member}</p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <p className="text-gray-400 text-[9px] md:text-xs">
          This is a project for NSYSU DFLL 2023 Spring English Literature. It is
          not for commercial use.
        </p>
        <p className="text-gray-400 text-[9px] md:text-xs">
          &copy; 2023 Yi-Min Chen. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
