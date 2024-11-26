import { Category } from "./Category";

export type Order = {
  id: string;
  title: string;
  description: string;
  category: Category;
  created_at: string;
};
