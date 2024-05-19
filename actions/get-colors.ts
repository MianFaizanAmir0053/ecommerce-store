import { Color } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

export const getColor = async (): Promise<Color[]> => {
  const res = await fetch(`${url}`);
  return res.json();
};
