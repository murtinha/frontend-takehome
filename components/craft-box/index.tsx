import CraftLanguageSelector from "../craft-language-selector";
import CraftTypeSelector from "../craft-type-selector";

export default function CraftBox() {
  return (
    <div className="flex flex-col max-w-[760px] max-h-[286px] w-[80%] h-full bg-white p-6 shadow-card">
      <div className="flex">
        <div className="flex flex-1">
          <span className="text-[22px] font-medium">Craft</span>{" "}
          <CraftTypeSelector />
        </div>
        <CraftLanguageSelector size="sm" />
      </div>

      <form className="flex flex-col flex-1 justify-center mt-6">
        <textarea
          id="craft-description"
          name="craft-description"
          placeholder="Describe items appearance and what it should do"
          className="w-full bg-[#F2F2F2] h-[104px] border border-gray-300 px-4 py-3 mr-4 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          rows={4}
        />
        <button
          type="submit"
          className="bg-primary px-4 py-3 desktop:px-6 desktop:py-2 mt-6 w-full desktop:w-[240px] font-semibold hover:bg-primary-hover ml-auto desktop:ml-auto text-sm desktop:text-base"
        >
          Create Item
        </button>
      </form>
    </div>
  );
}
