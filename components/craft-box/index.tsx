import CraftLanguageSelector from "../craft-language-selector";
import CraftTypeSelector from "../craft-type-selector";

export default function CraftBox() {
  return (
    <div className="flex flex-col max-w-[760px] max-h-[286px] w-[80%] h-full bg-white p-6">
      <div className="flex">
        <div className="flex flex-1">
          <span>Craft</span> <CraftTypeSelector />
        </div>
        <CraftLanguageSelector />
      </div>

      <form className="flex flex-col flex-1 justify-center">
        <textarea
          id="craft-description"
          name="craft-description"
          placeholder="Describe item's appearance and what it should do"
          className="w-full h-[104px] border border-gray-300 rounded-md px-4 py-3 mr-4 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          rows={4}
        />
        <button
          type="submit"
          className="bg-primary px-4 py-3 desktop:px-6 desktop:py-2 mt-4 w-full desktop:w-[240px] font-semibold hover:bg-primary-hover ml-auto desktop:ml-auto text-sm desktop:text-base"
        >
          Create Item
        </button>
      </form>
    </div>
  );
}
