"use client";

import { useCraftForm } from "../../lib/hooks/use-craft-form";
import CraftLanguageSelector from "../craft-language-selector";
import CraftTypeSelector from "../craft-type-selector";
import Spinner from "../ui/spinner";
import { CraftFormContext } from "./craft-form-context";

export default function CraftBox() {
  const { form, title, onSubmit, isSubmitting, errors } = useCraftForm();

  return (
    <CraftFormContext.Provider value={form}>
      <div className="flex flex-col max-w-[760px] w-[80%] h-full bg-white p-6 shadow-card">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex flex-1">
            <span className="text-[22px] font-medium">Craft</span>{" "}
            <CraftTypeSelector />
          </div>
          <CraftLanguageSelector size="sm" />
        </div>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col flex-1 justify-center mt-6"
        >
          <textarea
            {...form.register("title")}
            placeholder="Describe items appearance and what it should do"
            className="w-full bg-[#F2F2F2] h-[104px] border border-gray-300 px-4 py-3 mr-4 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            rows={4}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
          <button
            type="submit"
            disabled={isSubmitting || !title}
            className="bg-primary px-4 py-3 desktop:px-6 desktop:py-2 mt-6 w-full desktop:w-[240px] font-semibold hover:bg-primary-hover ml-auto desktop:ml-auto text-sm desktop:text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting && <Spinner size="sm" />}
            Create Item
          </button>
        </form>
      </div>
    </CraftFormContext.Provider>
  );
}
