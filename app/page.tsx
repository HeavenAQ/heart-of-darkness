import Image from "next/image";
import { BsFillLightningChargeFill } from "react-icons/bs";
import Footer from "./components/Footer";
import { Menu } from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <div className="inline-flex pr-20">
        <div className="flex flex-col w-1/2  py-7 min-h-[100vh] items-center flex-auto gap-10 px-20">
          <div className="inline-flex items-center justify-center space-x-5 text-white text-xl">
            <BsFillLightningChargeFill />
            <h3 className="tracking-widest">Heart of Darkness</h3>
            <BsFillLightningChargeFill />
          </div>
          <div>
            <Image
              src="/home/logo-death.png"
              height={2051}
              width={1400}
              alt="Death Metal fonts"
            />
          </div>
          <div className="text-white text-4xl text-center leading-[60px]">
            <h1>Final Project for NSYSU DFLL 2023 Spring English Literature</h1>
          </div>
          <Menu />
        </div>
        <div className="w-1/2 max-h-[97vh] overflow-hidden">
          <Image
            src="/home/Heart-of-Darkness-2019Final-1400x2051.jpg"
            width={1400}
            height={2051}
            alt="Heart of Darkness"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
