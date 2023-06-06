"use client";
import React, { useState, useRef } from "react";
import { Character, characters } from "../components/data/characters";
import { AiOutlineUserSwitch } from "react-icons/ai";
import ContentBox from "../components/ContentBox";
import Image from "next/image";

const CharacterNameBalls = (currentCharacter: CharacterElement) => {
  return characters.map((character, i) => {
    const lightOnStyle = [
      "before:pointer-events-none",
      "before:absolute",
      "before:top-1/2",
      "before:left:1/2",
      "before:-translate-y-1/2",
      "before:bg-gradient-to-br",
      "before:from-zinc-800",
      "before:to-red-600",
      "before:w-full",
      "before:h-full",
      "before:z-9",
      "before:content-['SELECTED']",
      "before:flex",
      "before:justify-center",
      "before:items-center",
      "before:opacity-70",
      "before:rounded-full",
      "before:lg:text-lg",
      "before:sm:text-sm",
      "before:text-[9px]",
    ];
    const defaultSelected = i === 0 ? lightOnStyle.join(" ") : "";
    return (
      <div key={i} className="inline-flex justify-center items-center mr-5">
        <button
          className={`relative text-center ${defaultSelected}`}
          ref={i === 0 ? currentCharacter.ref : null}
          onClick={(e) => {
            currentCharacter.ref.current?.classList.remove(...lightOnStyle);
            currentCharacter.ref.current = e.currentTarget;
            e.currentTarget.classList.add(...lightOnStyle);
            currentCharacter.update(character);
          }}
        >
          <Image
            className="rounded-full lg:w-32 lg:h-32 md:w-24 md:h-24 w-16 h-16"
            src={character.profile}
            alt={character.name}
            width={100}
            height={100}
          />
        </button>
      </div>
    );
  });
};

interface CharacterElement {
  character: Character;
  update: React.Dispatch<React.SetStateAction<Character>>;
  ref: React.MutableRefObject<HTMLButtonElement | null>;
}

const CharacterPage = () => {
  const [curImgIdx, setCurImgIdx] = useState<number>(0);
  const [currentCharacter, setCurrentCharacter] = useState<Character>(
    characters[0]
  );
  const currentCharacterElement: CharacterElement = {
    character: currentCharacter,
    update: setCurrentCharacter,
    ref: useRef<HTMLButtonElement | null>(null),
  };
  const lightOnStyle = ["bg-gradient-to-br", "from-zinc-800", "to-red-600"];

  return (
    <>
      <div className="block text-center space-y-5 ml-5">
        {CharacterNameBalls(currentCharacterElement)}
      </div>
      <div className="lg:inline-flex w-full h-auto mb-20">
        <div className="flex flex-col items-center justify-start lg:w-7/12 w-full h-auto px-6 py-6 relative">
          <Image
            className="lg:mb-11 mb-8 rounded-lg mt-3"
            src={currentCharacter.images[curImgIdx]}
            height={1000}
            width={1000}
            alt="Character Image"
          />
          <button
            className="bg-zinc-900 text-white l:p-4 p-2 xl:text-4xl lg:text-3xl text-2xl rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 text-center gap-3"
            onClick={(e) => {
              curImgIdx === 0 ? setCurImgIdx(1) : setCurImgIdx(0);
              curImgIdx === 0
                ? e.currentTarget.classList.add(...lightOnStyle)
                : e.currentTarget.classList.remove(...lightOnStyle);
            }}
          >
            <AiOutlineUserSwitch />
          </button>
        </div>
        <div className="lg:w-5/12 w-full mt-10">
          <ContentBox>
            <h1 className="font-black md:text-[30px] text-[20px] text-left mb-5">
              {currentCharacter.name}
            </h1>
            <div className="line-clamp-[14] md:text-[18px] text-[12px] md:leading-10">
              {currentCharacter.description}
            </div>
          </ContentBox>
        </div>
      </div>
    </>
  );
};

export default CharacterPage;
