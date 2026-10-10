"use client";
import Link from "next/link";
import { useState } from "react";
import { IBM_Plex_Mono, Inter } from "next/font/google";

const plex = IBM_Plex_Mono({ subsets: ["latin"], weight: "700" });
const inter = Inter({ subsets: ["latin"], weight: "400" });

const links = [
  { href: "/#team", label: "Team" },
  { href: "/cars", label: "Cars" },
  { href: "/#activities", label: "Activities" },
  { href: "/#achievement", label: "Achievement" },
  { href: "/#partner", label: "Partner" },
  { href: "/shop", label: "Store" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className={`sticky top-0 z-50 bg-brand text-white ${inter.className}`}>
      <div className="relative flex h-[51px] items-center justify-between px-[27px]">
        <Link href="/" className={`${plex.className} text-2xl`}>
          ANARGYA
        </Link>

        <button
          className="text-2xl md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          ☰
        </button>

        <nav
          className={`${open ? "flex" : "hidden"} absolute left-0 top-full w-full flex-col gap-4 bg-brand p-6 text-xl md:static md:flex md:w-auto md:flex-row md:gap-[72px] md:p-0`}
        >
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}