import { z } from "zod";
import { VALID_BADGES, ValidBadge } from "../../app/utils/badge";

export const createItemSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be 100 characters or less")
    .trim(),
  version: z
    .string()
    .min(1, "Version is required")
    .max(20, "Version must be 20 characters or less")
    .regex(
      /^[0-9]+\.[0-9]+\.[0-9]+$/,
      "Version must be in format X.Y.Z (e.g., 1.0.0)"
    ),
  mcVersion: z
    .string()
    .min(1, "Minecraft version is required")
    .max(20, "Minecraft version must be 20 characters or less")
    .regex(
      /^[0-9]+\.[0-9]+(\.[0-9]+)?$/,
      "Minecraft version must be in format X.Y or X.Y.Z"
    ),
  language: z
    .string()
    .min(1, "Language is required")
    .max(50, "Language must be 50 characters or less")
    .trim(),
  image: z
    .string()
    .min(1, "Image URL is required")
    .url("Image must be a valid URL")
    .trim(),
  type: z.enum(["items", "blocks"]).default("items"),
  badges: z
    .array(z.enum(VALID_BADGES as [ValidBadge, ...ValidBadge[]]))
    .min(1, "At least one badge is required")
    .max(10, "Maximum 10 badges allowed"),
});

export type CreateItemSchema = z.infer<typeof createItemSchema>;
