import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import { ProductGrid } from "../../components/products/product-grid/ProductGrid";
const products = initialData.products;
export default function Home() {
  return (
    <div>
      <Title title="Tienda" subtitle="Todos los productos" classname="mb-2" />
      <ProductGrid products={products} />
    </div>
  );
}
