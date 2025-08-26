"use client";

import { SnackbarProvider } from "notistack";
import CraftBox from "../craft-box";
import ItemListSection from "../item-list-section";

export default function HomePage() {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <div className="flex flex-col min-h-[calc(100vh-var(--header-height))]">
        <section className="w-full bg-create py-10 mobile:py-6  pt-[var(--header-height)]">
          <div className="w-full flex justify-center items-center min-h-[440px]">
            <CraftBox />
          </div>
        </section>

        <section className="w-full bg-white py-10 mobile:py-6">
          <div className="w-full flex justify-center items-center">
            <ItemListSection />
          </div>
        </section>
      </div>
    </SnackbarProvider>
  );
}
