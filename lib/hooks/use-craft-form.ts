"use client";

import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { createItem } from "../../app/actions/create-item";
import { generateItem } from "../../app/actions/generate-item";
import { deserializeBadges } from "../../app/utils/badge";
import { useItemsStore } from "../stores/items-store";
import { CreateItemSchema } from "../validations/item";

export function useCraftForm() {
  const { enqueueSnackbar } = useSnackbar();
  const { addItem, updateItem } = useItemsStore();

  const form = useForm<CreateItemSchema>({
    defaultValues: {
      title: "",
      version: "1.0.0",
      mcVersion: "1.21.5",
      language: "java",
      image: "https://random-image-pepebigotes.vercel.app/api/random-image",
      type: "items",
      badges: ["adventure"],
    },
  });

  const title = form.watch("title");

  const onSubmit = async (data: CreateItemSchema) => {
    try {
      const uniqueImageUrl = `${data.image}?r=${Math.random()}`;
      const dataWithUniqueImage = { ...data, image: uniqueImageUrl };

      const result = await createItem(dataWithUniqueImage);

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
          const updateResult = await generateItem(itemId);

          if (updateResult.success && updateResult.data) {
            updateItem(itemId, { status: updateResult.data.status });

            enqueueSnackbar("Item generation completed successfully!", {
              autoHideDuration: 3000,
              variant: "success",
            });
          } else {
            updateItem(itemId, { status: "ERROR" });
            enqueueSnackbar("Item generation failed. Please try again.", {
              autoHideDuration: 3000,
              variant: "error",
            });
          }
        } catch (error) {
          updateItem(itemId, { status: "ERROR" });
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

  return {
    form,
    title,
    onSubmit,
    isSubmitting: form.formState.isSubmitting,
    errors: form.formState.errors,
  };
}
