import { getCategory } from "@/actions/get-category";
import { getColor } from "@/actions/get-colors";
import { getProducts } from "@/actions/get-products";
import { getSize } from "@/actions/get-sizes";
import Billboard from "@/components/Billboard";
import Filter from "@/components/Filter";
import MobileFilters from "@/components/MobileFilters";
import Container from "@/components/ui/Container";
import NoResults from "@/components/ui/NoResults";
import ProductCard from "@/components/ui/ProductCard";
import React, { FC } from "react";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };

  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage: FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const { categoryId } = params;
  const { colorId, sizeId } = searchParams;

  const products = await getProducts({
    categoryId,
    colorId,
    sizeId,
  });

  const category = await getCategory(categoryId);
  const color = await getColor();
  const size = await getSize();

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={size} colors={color} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={size} />
              <Filter valueKey="colorId" name="Colors" data={color} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
