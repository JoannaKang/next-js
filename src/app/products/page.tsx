import Link from "next/link";

const products = ["pants", "skirt", "shirt", "jacket"];

export default function ProductsPage() {
  return (
    <>
      {products.map((product, index) => {
        return (
          <li key={index}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        );
      })}
    </>
  );
}
