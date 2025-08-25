import Image from "next/image";

export default function HeaderLogo() {
  return (
    <div className="relative">
      {/* Mobile Logo */}
      <Image
        src="/creativemode-mobile.webp"
        alt="CreativeMode"
        width={38}
        height={38}
        className="w-10 desktop:hidden h-auto"
      />

      {/* Desktop Logo */}
      <Image
        src="/creativemode.webp"
        alt="CreativeMode"
        width={100}
        height={34}
        className="hidden desktop:block w-[100px] h-auto"
      />
    </div>
  );
}
