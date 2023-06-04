import React from "react";

interface PageProps {
  title: string;
  children: React.ReactNode;
}

const MainContent: React.FC<PageProps> = ({ title, children }) => {
  return (
    <main className="flex flex-col justify-start items-center min-h-screen pt-40 mx-10 gap-11 md:mx-32 md:gap-16">
      <h1 className="uppercase tracking-widest font-black text-red-600 text-3xl md:text-5xl">
        {title}
      </h1>
      {children}
    </main>
  );
};

export default MainContent;
