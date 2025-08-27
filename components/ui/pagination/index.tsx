import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { useItemsStore } from "../../../lib/stores/items-store";

export default function Pagination() {
  const { totalCount, page, setPage } = useItemsStore();

  const totalPages = Math.ceil(totalCount / 5);

  return (
    <div className="mt-7 flex">
      <div className="flex items-center flex-1">
        {totalCount} total mods number
      </div>
      <div className="flex items-center gap-2">
        <div>
          Page {page} of {totalPages}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="flex items-center gap-2 px-2 py-2 border text-sm font-medium hover:bg-primary-hover disabled:opacity-50"
          >
            <IoChevronBackOutline className="w-4 h-4" />
          </button>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="flex items-center gap-2 px-2 py-2 border text-sm font-medium hover:bg-primary-hover disabled:opacity-50"
          >
            <IoChevronForwardOutline className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
