import { getBillboards } from "@/actions/get-billboards";
import { getProducts } from "@/actions/get-products";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboards = await getBillboards(
    "b43aad35-52d3-4ace-b110-735e4d9a117f"
  );

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Feature Products" items={products} />
      </div>
    </Container>
  );
};

export default HomePage;
