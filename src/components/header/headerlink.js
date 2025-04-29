"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function HeaderLink({ children, path }) {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className={`${
        pathname === path ? "text-blue-500" : ""
      } z-20 relative flex items-center gap-x-1`}
    >
      {children}
    </Link>
  );
}
