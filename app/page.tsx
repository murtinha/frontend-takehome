import CraftBox from "../components/craft-box";
import ItemListSection from "../components/item-list-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-var(--header-height))] pt-[var(--header-height)] bg-create">
      <div className="w-full flex justify-center items-center min-h-[440px] py-10 mobile:py-6">
        <CraftBox />
      </div>

      <div className="w-full flex justify-center items-center bg-white py-10 mobile:py-6">
        <ItemListSection />
      </div>
    </div>
  );
}
