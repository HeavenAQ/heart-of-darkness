"use client";
import "./globals.css";
import { Chakra_Petch } from "next/font/google";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";

const chakraPatch = Chakra_Petch({
  weight: ["300", "400", "700", "500", "600"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={`${chakraPatch.className} text-white bg-zinc-700`}>
        {pathname !== "/" && <Navbar />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
