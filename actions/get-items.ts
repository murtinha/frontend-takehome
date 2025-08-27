"use server";

import { deserializeBadges, ValidBadge } from "../app/utils/badge";
import { prisma } from "../lib/prisma";

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
  badges: ValidBadge[];
};

export async function getItems({
  take = 5,
  skip = 0,
}: {
  take?: number;
  skip?: number;
}): Promise<{
  items: ItemWithBadges[];
  totalCount: number;
}> {
  try {
    const totalCount = await prisma.item.count();
    const items = await prisma.item.findMany({
      take,
      skip,
      orderBy: {
        createdAt: "desc",
      },
    });

    // Deserialize badges for each item
    return {
      items: items.map((item) => ({
        ...item,
        status: item.status as "PENDING" | "SUCCESS" | "ERROR",
        badges: deserializeBadges(item.badges),
      })),
      totalCount,
    };
  } catch (error) {
    console.error("Error fetching items:", error);
    return {
      items: [],
      totalCount: 0,
    };
  }
}
