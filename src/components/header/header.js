import "./header.css";
import { FaRocket } from "react-icons/fa";
import { FaBatteryFull } from "react-icons/fa";
import HeaderLink from "./headerlink";
import Image from "next/image";

import MenuIcon from "./menuIcon";

export default function Header() {
  return (
    <div className="py-[40px] max-w-[1200px] mx-auto px-[24px] relative z-30">
      <header className="header flex justify-between items-center p-2 rounded-[100px] py-[10px] px-[40px] border-gradient fixed top-0 left-0 right-0 z-40 w-full">
        <div className="text-white font-bold absolute top-[-40px] left-[10px] z-50 ship-icon-left">
          <Image
            src="/images/boat.svg"
            alt="ship"
            width={40}
            height={40}
            priority={true}
          />
        </div>
        <div className="text-white font-bold absolute top-[-40px] right-[10px] z-50 ship-icon-right">
          <Image
            src="/images/boat.svg"
            alt="ship"
            width={40}
            height={40}
            priority={true}
          />
        </div>
        <div className="flex items-center gap-x-1">
          <h2 className="text-white font-bold relative z-50">
            <HeaderLink path="/">
              <Image
                src="/images/001-01.svg"
                alt="logo"
                width={20}
                height={20}
                className="mb-4 mx-auto animate-pulse absolute top-[50%] translate-y-[-53%] left-[-20px] z-50"
                style={{
                  borderColor: "blue",
                }}
              />
              <span>Cosmic Fishing</span>
            </HeaderLink>
          </h2>
        </div>

        <nav className="flex justify-center items-center relative z-50">
          <ul className="flex gap-x-4 items-center m-0">
            <MenuIcon />
            <li className="text-white font-bold sm:block hidden">
              <HeaderLink
                path="/leaderboard"
                className="z-50 relative flex items-center gap-x-1"
              >
                <FaRocket />
                <span>Leaderboard</span>
              </HeaderLink>
            </li>
            <li className="text-white font-bold pcLink sm:block hidden">
              <HeaderLink
                path="/market"
                className="z-50 relative flex items-center gap-x-1"
              >
                <FaBatteryFull />
                <span>Level Up</span>
              </HeaderLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
