import type { Etiqueta } from "@/server/db/schema";
import { proxy } from "valtio";

export type Store = {
  etiquetas: Etiqueta[];
};

export const store = proxy<Store>({
  etiquetas: [],
});
