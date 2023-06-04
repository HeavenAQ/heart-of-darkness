"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import ContentBox from "../components/ContentBox";
import { Episode, episodes } from "../components/data/episodes";

const EpisodeNumberBalls = (currentEpisode: EpisodeElement) => {
  return episodes.map((episode, i) => {
    const lightOnStyle = ["bg-gradient-to-br", "from-zinc-800", "to-red-600"];
    const defaultSelected = i === 0 ? lightOnStyle.join(" ") : "";
    return (
      <div key={i} className="inline-flex">
        <button
          className={`md:w-16 md:h-16 flex justify-center items-center rounded-full text-white text-center leading-10 md:text-2xl bg-zinc-700 cursor-pointer border-red-700 border-2 hover:bg-gradient-to-br hover:from-zinc-800 hover:to-red-600 h-12 w-12 text-l ${defaultSelected}`}
          ref={i === 0 ? currentEpisode.ref : null}
          onClick={(e) => {
            currentEpisode.ref.current?.classList.remove(...lightOnStyle);
            currentEpisode.ref.current = e.currentTarget;
            e.currentTarget.classList.add(...lightOnStyle);
            currentEpisode.update(episode);
          }}
        >
          {episode.id}
        </button>
      </div>
    );
  });
};

const Thumbnails = (
  currentEpisode: EpisodeElement,
  thumbnailInfo: ThumnailInfo
) => {
  return currentEpisode.episode.images.map((image, i) => {
    const selectedEffect = [
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
      "before:z-10",
      "before:content-['SELECTED']",
      "before:flex",
      "before:justify-center",
      "before:items-center",
      "before:opacity-70",
      "before:rounded-lg",
      "before:lg:text-lg",
      "before:sm:text-sm",
      "before:text-[9px]",
    ];
    const defaultSelected = i === 0 ? selectedEffect.join(" ") : "";
    return (
      <div
        className={`relative cursor-pointer ${defaultSelected}`}
        key={i}
        ref={i === 0 ? thumbnailInfo.ref : null}
        onClick={(e) => {
          thumbnailInfo.setThumnailIdx(i);
          thumbnailInfo.ref.current?.classList.remove(...selectedEffect);
          e.currentTarget.classList.add(...selectedEffect);
          thumbnailInfo.ref.current = e.currentTarget;
          thumbnailInfo.setThumnail(e.currentTarget);
        }}
      >
        <Image
          width={200}
          height={200}
          src={image}
          alt="episode image1"
          className="rounded-lg"
        />
      </div>
    );
  });
};

interface EpisodeElement {
  episode: Episode;
  update: React.Dispatch<React.SetStateAction<Episode>>;
  ref: React.MutableRefObject<HTMLButtonElement | null>;
}

interface ThumnailInfo {
  setThumnailIdx: React.Dispatch<React.SetStateAction<number>>;
  setThumnail: React.Dispatch<React.SetStateAction<HTMLDivElement | undefined>>;
  thumbnail?: HTMLDivElement;
  ref: React.MutableRefObject<HTMLDivElement | null>;
}

export default function StoryPage() {
  const [currentEP, setCurrentEP] = useState<Episode>(episodes[0]);
  const currentEpisode: EpisodeElement = {
    episode: currentEP,
    update: setCurrentEP,
    ref: useRef(null),
  };
  const [selectedThumbnailIdx, setSelectedThumbnailIdx] = useState<number>(0);
  const [selectedThumbnail, setSelectedThumbnail] = useState<HTMLDivElement>();
  const thumbnailInfo: ThumnailInfo = {
    setThumnailIdx: setSelectedThumbnailIdx,
    setThumnail: setSelectedThumbnail,
    thumbnail: selectedThumbnail,
    ref: useRef(null),
  };

  return (
    <>
      <div className="w-full h-30 block text-center space-x-5 space-y-5">
        {EpisodeNumberBalls(currentEpisode)}
      </div>
      <ContentBox>
        <div className="mx-auto flex flex-col items-center justify-center gap-14">
          <h1 className="text-center lg:text-2xl md:text-xl text-l font-semibold space-y-6">
            <span>{`Episode ${currentEpisode.episode.id}`}</span>
            <br />
            <span className="text-center lg:text-4xl md:text-3xl text-2xl font-black">
              {currentEpisode.episode.title}
            </span>
          </h1>
          <div className="mx-auto flex flex-col items-center justify-center gap-6">
            <Image
              width={1000}
              height={1000}
              src={currentEpisode.episode.images[selectedThumbnailIdx]}
              alt="episode image1"
              className="rounded-lg"
            />
            <div className="inline-flex items-center justify-center w-11/12 h-auto space-x-6">
              {Thumbnails(currentEpisode, thumbnailInfo)}
            </div>
          </div>
          <div className="">
            <p className="text-justify lg:text-2xl md:text-xl text-l font-semibold">
              {currentEpisode.episode.description}
            </p>
          </div>
        </div>
      </ContentBox>
    </>
  );
}
