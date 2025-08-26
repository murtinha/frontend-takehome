"use server";

import { prisma } from "../../lib/prisma";
import { deserializeBadges, ValidBadge } from "../utils/badge";

export type ItemWithBadges = {
  id: string;
  title: string;
  version: string;
  mcVersion: string;
  language: string;
  downloads: number;
  createdAt: Date;
  updatedAt: Date;
  image: string;
  status: "PENDING" | "SUCCESS" | "ERROR";
  pendingPercentage: number;
  badges: ValidBadge[];
};

export async function getItems(): Promise<ItemWithBadges[]> {
  try {
    const items = await prisma.item.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    // Deserialize badges for each item
    return items.map((item) => ({
      ...item,
      status: item.status as "PENDING" | "SUCCESS" | "ERROR",
      badges: deserializeBadges(item.badges),
    }));
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
}
