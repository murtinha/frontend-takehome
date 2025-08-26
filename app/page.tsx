import CraftBox from "../components/craft-box";
import ItemListSection from "../components/item-list-section";

export default function Home() {
  return (
    <div
      className={`flex flex-col items-center justify-center h-[calc(100vh-var(--header-height))]`}
    >
      <div className="mb-10 w-full flex justify-center items-center bg-create h-full min-h-[440px]">
        <CraftBox />
      </div>

      <div className="w-full flex justify-center items-center mt-10 bg-white">
        <ItemListSection />
      </div>
    </div>
  );
}
