import CategoryProducts from "../components/CategoryProducts";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <section>
      <CategoryProducts category={slug} />
    </section>
  );
}
