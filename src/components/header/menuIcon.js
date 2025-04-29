"use client";

import { FaBars } from "react-icons/fa";
import { useMenu } from "./menuContext";
import MobileMenu from "./mobileMenu";

export default function MenuIcon() {
  const { isOpen, setIsOpen } = useMenu();
  return (
    <div className="relative">
      <FaBars
        className="text-white font-bold text-[20px] sm:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          color: isOpen ? "blue" : "white",
        }}
      />
      <div
        className="absolute top-0 right-0 "
        style={{
          transform: "translateY(40px) translateX(9px)",
        }}
      >
        <MobileMenu />
      </div>
    </div>
  );
}
