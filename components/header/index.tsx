"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaDiscord } from "react-icons/fa";
import HeaderLogo from "./header-logo";

export default function Header() {
  const selectedRoute = usePathname();

  return (
    <div className="w-full h-[90px] bg-create flex items-center py-6 px-4 desktop:px-10">
      <HeaderLogo />

      <div className="flex-1">
        <div className="flex items-center gap-3 desktop:gap-4 ml-4 desktop:ml-10 font-semibold">
          <Link
            href="/"
            className={`text-xs desktop:text-base transition-colors hover:text-primary ${
              selectedRoute === "/"
                ? "underline decoration-dashed underline-offset-2"
                : "text-gray-500"
            }`}
          >
            Craft
          </Link>
          <Link
            href="/explore"
            className={`text-xs desktop:text-base transition-colors hover:text-primary ${
              selectedRoute === "/explore"
                ? "underline decoration-dashed underline-offset-2"
                : "text-gray-500"
            }`}
          >
            Explore
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-2 desktop:gap-4 ml-2">
        <button className="bg-discord-bg text-discord-text px-3 py-2 desktop:px-4 desktop:py-2 hover:opacity-90 transition-opacity flex items-center gap-1.5 desktop:gap-2 text-xs desktop:text-sm font-semibold">
          <FaDiscord className="w-3.5 h-3.5 desktop:w-4 desktop:h-4" />
          <span className="hidden desktop:inline">Join our community</span>
        </button>
        <div className="w-8 h-8 desktop:w-9 desktop:h-9 overflow-hidden border border-black">
          <Image
            src="https://avatar.iran.liara.run/public/47"
            alt="User Avatar"
            width={32}
            height={32}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex items-center justify-center w-5 h-5 desktop:w-6 desktop:h-6 rounded-full border-2 border-green-500 bg-white text-xs font-bold">
          1
        </div>
      </div>
    </div>
  );
}
