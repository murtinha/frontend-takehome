import { format } from "date-fns";

/**
 * Formats a date to "May 25, 2025" format
 * @param date - Date object or date string
 * @returns Formatted date string or "Unknown date" if invalid
 */
export function formatDate(date: Date | string): string {
  try {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return format(dateObj, "MMM d, yyyy");
  } catch {
    return "Unknown date";
  }
}
