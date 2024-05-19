import { getDataofSearch } from "@/actions/products";
import SearchProducts from "@/components/SearchProducts";

export default async function SearchResults({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] };
}) {
  const products = await getDataofSearch(searchParams.q, 0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-[5vmin]">
      <div className="flex flex-col items-center gap-[3vmax] mx-[3vmax]">
        <h1 className="text-[6vmin] capitalize font-bold self-start">
          showing results of {searchParams.q}
        </h1>
        <div className="flex flex-shrink flex-grow basis-[40vmax] justify-center gap-[2vmax] flex-wrap">
          <SearchProducts
            products={products.products}
            getDataofSearch={getDataofSearch}
            searchParam={searchParams.q}
          />
        </div>
      </div>
    </main>
  );
}
