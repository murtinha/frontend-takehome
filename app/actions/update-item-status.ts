"use server";

import { prisma } from "../../lib/prisma";

export type UpdateItemStatusResult = {
  success: boolean;
  data?: {
    id: string;
    status: "PENDING" | "SUCCESS" | "ERROR";
  };
  error?: string;
};

export async function updateItemStatus(
  itemId: string
): Promise<UpdateItemStatusResult> {
  try {
    // Wait 5 seconds to simulate item generation
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // Update the item status to SUCCESS
    const updatedItem = await prisma.item.update({
      where: { id: itemId },
      data: {
        status: "SUCCESS",
      },
      select: {
        id: true,
        status: true,
      },
    });

    return {
      success: true,
      data: {
        id: updatedItem.id,
        status: updatedItem.status as "PENDING" | "SUCCESS" | "ERROR",
      },
    };
  } catch (error) {
    console.error("Error updating item status:", error);
    return {
      success: false,
      error: "Failed to update item status",
    };
  }
}
