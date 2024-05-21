import { Product } from "@/modules/products/types/Product";

export type Category = {
  id: number;
  name: string;
  description: string;
  products?: Product[];
};
