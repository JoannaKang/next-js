import { getProduct, getProducts, Product } from "@/service/products";
import { notFound } from "next/navigation";

// ISR 렌더링 : 데이터를 갱신할 주기를 설정할 수 있다.
export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `Product name: ${params.slug}`,
  };
}
// Dynamic Routing
export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  if (!product) {
    notFound();
  }
  return <h1>{product.name} items</h1>;
}

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줌 (SSG)
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
