"use client";

import { createContext, useContext } from "react";
import { UseFormReturn } from "react-hook-form";
import { CreateItemSchema } from "../../lib/validations/item";

type CraftFormContextType = UseFormReturn<CreateItemSchema> | null;

const CraftFormContext = createContext<CraftFormContextType>(null);

export function useCraftForm() {
  const context = useContext(CraftFormContext);
  if (!context) {
    throw new Error("useCraftForm must be used within a CraftFormProvider");
  }
  return context;
}

export { CraftFormContext };
