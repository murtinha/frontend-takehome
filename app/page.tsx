import CraftBox from "../components/craft-box";

export default function Home() {
  return (
    <div
      className={`flex flex-col items-center justify-center h-[calc(100vh-var(--header-height))] bg-create`}
    >
      <CraftBox />
    </div>
  );
}
