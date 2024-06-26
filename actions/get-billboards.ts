import { Billboard } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export const getBillboards = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${url}/${id}`);
  return res.json();
};
