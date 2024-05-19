import { getDataByCategory } from "@/actions/products";
import CategoryProductList from "@/components/CategoryProductList";

export default async function CategoryId({
  params,
}: {
  params: { categoryId: string };
}) {
  const products = await getDataByCategory(params.categoryId, 0);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between gap-[5vmin]'>
      <div className='flex flex-col items-center gap-[3vmax] mx-[3vmax]'>
        <h1 className='text-[6vmin] capitalize font-bold self-start'>
          {products.products[0].category}
        </h1>
        <div className='flex flex-shrink flex-grow basis-[40vmax] justify-center gap-[2vmax] flex-wrap'>
          <CategoryProductList
            products={products.products}
            getDataByCategory={getDataByCategory}
            categoryId={params.categoryId}
          />
        </div>
      </div>
    </main>
  );
}
