import { RefObject, useEffect, useRef } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { useItemsFetch } from "../../../lib/hooks/use-items-fetch";
import { useItemsStore } from "../../../lib/stores/items-store";

interface PaginationProps {
  listRef: RefObject<HTMLDivElement | null>;
}

export default function Pagination({ listRef }: PaginationProps) {
  const { totalCount, page, setPage, loading } = useItemsStore();
  const { fetchItems } = useItemsFetch();
  const previousPageRef = useRef(page);

  const totalPages = Math.ceil(totalCount / 5);

  useEffect(() => {
    if (!loading && listRef.current && previousPageRef.current !== page) {
      listRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      previousPageRef.current = page;
    }
  }, [loading, page, listRef]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    const skip = (newPage - 1) * 5;
    fetchItems(5, skip);
  };

  return (
    <div className="mt-2 desktop:mt-7 flex flex-col desktop:flex-row gap-y-2 mx-auto desktop:mx-0">
      <div className="flex items-center flex-1 text-sm">
        {totalCount} total mods number
      </div>
      <div className="flex items-center gap-4 desktop:gap-8">
        <div className="text-sm font-medium">
          Page {page} of {totalPages}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="flex items-center gap-2 px-2 py-2 border text-sm font-medium hover:bg-primary-hover disabled:opacity-50"
          >
            <IoChevronBackOutline className="w-4 h-4" />
          </button>
          <button
            onClick={() => handlePageChange(page + 1)}
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
