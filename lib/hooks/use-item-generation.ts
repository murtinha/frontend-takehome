"use client";

import { useSnackbar } from "notistack";
import { generateItem } from "../../app/actions/generate-item";
import { useItemsStore } from "../stores/items-store";

export function useItemGeneration() {
  const { enqueueSnackbar } = useSnackbar();
  const { updateItem } = useItemsStore();

  const generateItemWithStatus = async (itemId: string) => {
    try {
      const updateResult = await generateItem(itemId);

      if (updateResult.success && updateResult.data) {
        updateItem(itemId, { status: updateResult.data.status });

        enqueueSnackbar("Item generation completed successfully!", {
          autoHideDuration: 3000,
          variant: "success",
        });

        return { success: true };
      } else {
        updateItem(itemId, { status: "ERROR" });
        enqueueSnackbar("Item generation failed. Please try again.", {
          autoHideDuration: 3000,
          variant: "error",
        });

        return { success: false };
      }
    } catch (error) {
      updateItem(itemId, { status: "ERROR" });
      console.error("Error updating item status:", error);

      enqueueSnackbar("Item generation failed. Please try again.", {
        autoHideDuration: 3000,
        variant: "error",
      });

      return { success: false };
    }
  };

  return {
    generateItemWithStatus,
  };
}
