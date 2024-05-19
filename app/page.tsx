import { getAllData } from "@/actions/products";
import CategorySlider from "@/components/CategorySlider";
import ProductList from "@/components/ProductList";

export default async function Home() {
  const products = await getAllData(1);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between gap-[5vmin]'>
      {/* <div className="relative w-full max-w-[50vmax] mx-auto overflow-hidden my-[3vmin]">
        <CategorySlider />
      </div> */}
      <div className='flex flex-col items-center gap-[3vmax] mx-[3vmax]'>
        <h1 className='text-[6vmin] capitalize font-bold self-start'>
          all products
        </h1>
        <div className='flex flex-shrink flex-grow basis-[40vmax] justify-center gap-[2vmax] flex-wrap'>
          <ProductList
            products={products.products}
            getAllData={getAllData}
          />
        </div>
      </div>
    </main>
  );
}
