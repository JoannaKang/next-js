type Props = {
  params: {
    slug: string;
  };
};
// Dynamic Routing
export default function Pants({ params }: Props) {
  return <h1> {params.slug} Pants items</h1>;
}

export function generateStaticParams() {
  // 미리 페이지를 만들어두고 싶은 경로
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}
