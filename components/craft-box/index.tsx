"use client";

import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { createItem } from "../../app/actions/create-item";
import { updateItemStatus } from "../../app/actions/update-item-status";
import { deserializeBadges } from "../../app/utils/badge";
import { useItemsStore } from "../../lib/stores/items-store";
import { CreateItemSchema } from "../../lib/validations/item";
import CraftLanguageSelector from "../craft-language-selector";
import CraftTypeSelector from "../craft-type-selector";
import Spinner from "../ui/spinner";
import { CraftFormContext } from "./craft-form-context";

export default function CraftBox() {
  const { enqueueSnackbar } = useSnackbar();
  const { addItem, updateItem } = useItemsStore();
  const form = useForm<CreateItemSchema>({
    defaultValues: {
      title: "",
      version: "1.0.0",
      mcVersion: "1.21.5",
      language: "java",
      image: "https://picsum.photos/200/300",
      type: "items",
      badges: ["adventure"],
    },
  });
  const title = form.watch("title");

  const onSubmit = async (data: CreateItemSchema) => {
    try {
      const result = await createItem(data);

      if (result.success && result.data) {
        const newItem = {
          ...result.data,
          badges: deserializeBadges(result.data.badges),
          status: result.data.status as "PENDING" | "SUCCESS" | "ERROR",
        };
        addItem(newItem);

        form.reset();
        enqueueSnackbar(
          "Item created successfully! Generation in progress...",
          {
            autoHideDuration: 3000,
            variant: "success",
          }
        );

        const itemId = result.data.id;
        try {
          const updateResult = await updateItemStatus(itemId);

          if (updateResult.success && updateResult.data) {
            // Update the item status in the local state
            updateItem(itemId, { status: updateResult.data.status });

            enqueueSnackbar("Item generation completed successfully!", {
              autoHideDuration: 3000,
              variant: "success",
            });
          } else {
            enqueueSnackbar("Item generation failed. Please try again.", {
              autoHideDuration: 3000,
              variant: "error",
            });
          }
        } catch (error) {
          console.error("Error updating item status:", error);

          enqueueSnackbar("Item generation failed. Please try again.", {
            autoHideDuration: 3000,
            variant: "error",
          });
        }
      } else {
        if (result.fieldErrors) {
          Object.entries(result.fieldErrors).forEach(([field, errors]) => {
            form.setError(field as keyof CreateItemSchema, {
              type: "server",
              message: errors[0],
            });
          });
          enqueueSnackbar("Please fix the validation errors.", {
            autoHideDuration: 3000,
            variant: "error",
          });
        } else {
          enqueueSnackbar(
            result.error || "Failed to create item. Please try again.",
            {
              autoHideDuration: 3000,
              variant: "error",
            }
          );
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      enqueueSnackbar("An unexpected error occurred. Please try again.", {
        autoHideDuration: 3000,
        variant: "error",
      });
    }
  };

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
          {form.formState.errors.title && (
            <p className="text-red-500 text-sm mt-1">
              {form.formState.errors.title.message}
            </p>
          )}
          <button
            type="submit"
            disabled={form.formState.isSubmitting || !title}
            className="bg-primary px-4 py-3 desktop:px-6 desktop:py-2 mt-6 w-full desktop:w-[240px] font-semibold hover:bg-primary-hover ml-auto desktop:ml-auto text-sm desktop:text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {form.formState.isSubmitting && <Spinner size="sm" />}
            Create Item
          </button>
        </form>
      </div>
    </CraftFormContext.Provider>
  );
}
