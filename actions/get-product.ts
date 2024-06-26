import { Product } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${url}/${id}`);
  return res.json();
};
