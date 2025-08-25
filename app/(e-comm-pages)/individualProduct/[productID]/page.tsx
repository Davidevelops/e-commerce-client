import { getAllProducts, getSingleProduct } from "@/lib/serverProducts";
import { type Product } from "@/lib/productStore";
import ProductDetails from "@/app/customComponents/ProductDetails";

export async function generateStaticParams(): Promise<{ productID: string }[]> {
  try {
    const products = await getAllProducts();
    return products.map((product: any) => {
      return { productID: product._id.toString() };
    });
  } catch (error) {
    console.log("An error occured while trying to get the product Id");
    return [];
  }
}

export default async function page({
  params,
}: {
  params: Promise<{ productID: string }>;
}) {
  const { productID } = await params; // Await the params promise
  const product: Product = await getSingleProduct(productID);

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
}
