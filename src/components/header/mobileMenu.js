"use client";

import Link from "next/link";
import { useMenu } from "./menuContext";
import "./mobileMenu.css";

export default function MobileMenu() {
  const { isOpen } = useMenu();
  return (
    <div
      className={`h-[152px] w-[80vw] ml-[-5px] rounded-xl  sm:hidden  top-[95px]  left-[25px] z-50 ${
        isOpen ? "opacity-100" : "opacity-0"
      } transition-all duration-300 `}
      style={{
        background: "rgba(21, 32, 63, 0.8)",
        backdropFilter: "blur(5px)",
      }}
    >
      <div className="mobile-menu"></div>
      <div className="flex flex-col gap-y-4 p-4">
        <Link
          href="/leaderboard"
          className="text-white hover:text-blue-400 transition-colors text-center py-2 border border-blue-500 rounded-lg"
          style={{
            fontFamily: "RetroFont",
            boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)",
            background: "rgba(21,32,63,0.6)",
          }}
        >
          Leaderboard
        </Link>
        <Link
          href="/market"
          className="text-white hover:text-blue-400 transition-colors text-center py-2 border border-blue-500 rounded-lg"
          style={{
            fontFamily: "RetroFont",
            boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)",
            background: "rgba(21,32,63,0.6)",
          }}
        >
          Market
        </Link>
      </div>
    </div>
  );
}
