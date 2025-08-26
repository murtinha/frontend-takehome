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

export async function generateItem(
  itemId: string
): Promise<UpdateItemStatusResult> {
  try {
    // Wait 5 seconds to simulate item generation
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // 50% chance of throwing an error to simulate generation failure
    if (Math.random() < 0.5) {
      throw new Error("Item generation failed due to server error");
    }

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

    // Update the item status to ERROR in the database
    try {
      await prisma.item.update({
        where: { id: itemId },
        data: {
          status: "ERROR",
        },
      });
    } catch (dbError) {
      console.error("Error updating item status to ERROR:", dbError);
    }

    return {
      success: false,
      error: "Failed to update item status",
    };
  }
}
