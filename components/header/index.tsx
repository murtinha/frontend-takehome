"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaDiscord } from "react-icons/fa";

export default function Header() {
  const selectedRoute = usePathname();

  return (
    <div className="w-full h-[90px] bg-create flex items-center py-6 px-10">
      <Image
        src="/creativemode.png"
        alt="CreativeMode"
        width={100}
        height={100}
      />
      <div className="flex-1">
        <div className="flex items-center gap-4 ml-10 font-semibold">
          <Link
            href="/"
            className={`${
              selectedRoute === "/"
                ? "underline decoration-dashed underline-offset-2"
                : "text-gray-500"
            }`}
          >
            Craft
          </Link>
          <Link href="/">Explore</Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-discord-bg text-discord-text px-4 py-2 hover:opacity-90 transition-opacity flex items-center gap-2 text-sm font-semibold">
          <FaDiscord className="w-4 h-4" />
          Join our community
        </button>
        <div className="w-9 h-9 overflow-hidden border border-black">
          <Image
            src="https://avatar.iran.liara.run/public/47"
            alt="User Avatar"
            width={36}
            height={36}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-green-500 bg-white text-xs font-bold">
          1
        </div>
      </div>
    </div>
  );
}
