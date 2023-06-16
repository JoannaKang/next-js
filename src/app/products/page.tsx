import { getProducts } from "@/service/products";
import Link from "next/link";

// ISR 렌더링 : 데이터를 갱신할 주기를 설정할 수 있다.
export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <>
      <h1>Product detail page</h1>
      <ul>
        {products.map(({ id, name }, index) => {
          return (
            <li key={index}>
              <Link href={`/products/${id}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
