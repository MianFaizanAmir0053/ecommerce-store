import { Category } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${url}/${id}`);
  return res.json();
};
