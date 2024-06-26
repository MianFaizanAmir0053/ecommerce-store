"use client";

import Currency from "@/components/ui/Currency";
import IconButton from "@/components/ui/IconButton";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";

type Props = {
  data: Product;
};

const CartItem = ({ data }: Props) => {
  const cart = useCart();
  const removeItem = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex py-6 border-b" key={data.id}>
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt="Product image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={removeItem} Icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="text-gray-500 ml-4 border-l pl-4 border-gray-200">
              {data.size.name}
            </p>
          </div>

          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
