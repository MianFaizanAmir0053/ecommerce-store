import { Product } from "@/types";
import Image from "next/image";
import { FC } from "react";
import NoResults from "./ui/NoResults";
import ProductCard from "./ui/ProductCard";

interface ProductListProps {
  title: string;
  items: Product[];
}
const ProductList: FC<ProductListProps> = ({ items, title }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.length === 0 && <NoResults />}
        {items.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
