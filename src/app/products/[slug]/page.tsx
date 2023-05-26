import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetaData({ params }: Props): Metadata {
  return {
    title: `Product name: ${params.slug}`,
  };
}

// Dynamic Routing
export default function Products({ params }: Props) {
  return <h1> {params.slug} items</h1>;
}

// export function generateStaticParams() {
//   // 미리 페이지를 만들어두고 싶은 경로
//   const products = ["pants", "skirt"];
//   return products.map((product) => ({
//     slug: product,
//   }));
// }
