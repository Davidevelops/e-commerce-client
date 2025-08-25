import { Product } from "@/lib/productStore";
import Image from "next/image";
import Link from "next/link";
export default function ProductList({ props }: { props: Product[] }) {
  return (
    <div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,350px))] gap-5 p-3  max-w-[1500px] mx-auto items-center justify-center">
        {props &&
          props.map((product) => (
            <Link href={`/individualProduct/${product._id}`} key={product._id}>
              <div className="group product-container border p-2">
                <div className="imageContainer bg-gray-100 overflow-hidden relative h-[400px]">
                  <Image
                    src={product.imageUrl![0]}
                    alt="product"
                    fill
                    className="group-hover:scale-105 transition-transform duration-400 ease-in-out object-contain"
                  ></Image>
                </div>
                <div className="p-1 flex justify-between items-center">
                  <p className="text-xl">{product.name}</p>
                  <h1 className="text-lg font-semibold">${product.price}</h1>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
