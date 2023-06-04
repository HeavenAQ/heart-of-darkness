"use client";
import "./globals.css";
import { Chakra_Petch } from "next/font/google";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";
import { FC } from "react";
import MainContent from "./components/MainContent";
import { NavLink, links } from "./components/data/routes";

const chakraPatch = Chakra_Petch({
  weight: ["300", "400", "700", "500", "600"],
  subsets: ["latin"],
});

interface PageProps {
  children: React.ReactNode;
}

const RootLayout: FC<PageProps> = ({ children }) => {
  const pathname = usePathname();
  const currentRoute = links.find(
    (link) => "" + link.path === pathname
  ) as NavLink;
  return (
    <html lang="en">
      <body className={`${chakraPatch.className} text-white bg-zinc-700`}>
        {pathname !== "/" && <Navbar />}
        {pathname !== "/" ? (
          <MainContent title={currentRoute.name}>{children}</MainContent>
        ) : (
          children
        )}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
