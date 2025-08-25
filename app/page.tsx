import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-create">
      <Image
        src="/creativemode.png"
        alt="CreativeMode"
        width={500}
        height={500}
      />
    </div>
  );
}
