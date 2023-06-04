import React, { FC } from "react";

interface PageProps {
  children: React.ReactNode;
}

const ContentBox: FC<PageProps> = ({ children }) => {
  return (
    <div className="h-full w-full outline outline-offset-4 bg-zinc-900 outline-zinc-900 text-justify rounded-md text-md p-9 leading-10 mb-20 md:text-2xl md:p-14 md:leading-[50px]">
      {children}
    </div>
  );
};

export default ContentBox;
