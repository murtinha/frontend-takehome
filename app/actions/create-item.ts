"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../../lib/prisma";
import { createItemSchema, CreateItemSchema } from "../../lib/validations/item";
import { serializeBadges } from "../utils/badge";

export type CreateItemResult = {
  success: boolean;
  data?: {
    id: string;
    title: string;
    version: string;
    mcVersion: string;
    language: string;
    downloads: number;
    createdAt: Date;
    updatedAt: Date;
    image: string;
    status: string;
    pendingPercentage: number;
    badges: string;
  };
  error?: string;
  fieldErrors?: Record<string, string[]>;
};

export async function createItem(
  input: CreateItemSchema
): Promise<CreateItemResult> {
  try {
    const validationResult = createItemSchema.safeParse(input);

    if (!validationResult.success) {
      const fieldErrors: Record<string, string[]> = {};

      validationResult.error.issues.forEach((issue) => {
        const field = issue.path.join(".");
        if (!fieldErrors[field]) {
          fieldErrors[field] = [];
        }
        fieldErrors[field].push(issue.message);
      });

      return {
        success: false,
        error: "Validation failed",
        fieldErrors,
      };
    }

    const validatedData = validationResult.data;

    const serializedBadges = serializeBadges(validatedData.badges);

    const item = await prisma.item.create({
      data: {
        title: validatedData.title,
        version: validatedData.version,
        mcVersion: validatedData.mcVersion,
        language: validatedData.language,
        downloads: 0,
        image: validatedData.image,
        status: "PENDING",
        pendingPercentage: 0,
        badges: serializedBadges,
      },
    });

    revalidatePath("/");

    return {
      success: true,
      data: item,
    };
  } catch (error) {
    console.error("Error creating item:", error);
    return {
      success: false,
      error: "Failed to create item. Please try again.",
    };
  }
}
