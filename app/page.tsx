import Image from "next/image";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { HomePageNav } from "./components/Navbar";
import { DropDownList } from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 lg:h-screen mb-9">
      <div className="inline-flex lg:pr-20">
        <div className="flex flex-col lg:w-1/2  py-7 h-100vh items-center gap-10 px-20 w-full">
          <div className="relative w-full text-center">
            <div className="inline-flex items-center justify-center md:space-x-5 space-x-2 lg:text-xl md:text-l text-sm">
              <BsFillLightningChargeFill />
              <h3 className="tracking-widest">Heart of Darkness</h3>
              <BsFillLightningChargeFill />
            </div>
            <div className="absolute -right-16 -top-[8px]">
              <DropDownList />
            </div>
          </div>
          <div>
            <Image
              src="/home/logo-death.png"
              height={2051}
              width={1400}
              alt="Death Metal fonts"
            />
          </div>
          <div className="lg:text-3xl md:text-2xl sm:text-xl text-l text-center lg:leading-[60px] leading-10">
            <h1>Final Project for NSYSU DFLL 2023 Spring English Literature</h1>
          </div>
          <HomePageNav />
          <Image
            className="lg:hidden"
            src="/home/Heart-of-Darkness-2019Final-1400x2051.jpg"
            width={1400}
            height={2051}
            alt="Heart of Darkness"
          />
        </div>
        <div className="hidden lg:inline w-1/2 max-h-[97vh] overflow-hidden">
          <Image
            src="/home/Heart-of-Darkness-2019Final-1400x2051.jpg"
            width={1400}
            height={2051}
            alt="Heart of Darkness"
          />
        </div>
      </div>
    </div>
  );
}
