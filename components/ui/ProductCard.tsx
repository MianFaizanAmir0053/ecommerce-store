"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
import { Product } from "@/types";
import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, MouseEventHandler } from "react";
import Currency from "./Currency";
import IconButton from "./IconButton";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();

  const OnClick = () => {
    router.push(`/product/${product.id}`);
  };

  const onPreview: MouseEventHandler = (e) => {
    e.stopPropagation();

    previewModal.onOpen(product);
  };

  const addToCart: MouseEventHandler = (e) => {
    e.stopPropagation();

    cart.addItem(product);
  };

  return (
    <div
      onClick={OnClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={product.images[0].url}
          alt={product.name}
          fill
          className="object-cover rounded-md aspect-square"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              Icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={addToCart}
              Icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{product.name}</p>
        <p className="text-sm text-gray-500">{product.category?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={product.price} />
      </div>
    </div>
  );
};

export default ProductCard;
