"use client";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import Image from "next/image";
import React, { ReactNode, useCallback, useState } from "react";
import Loader from "./Loader";
import Link from "next/link";

const SearchProducts = ({
  products,
  getDataofSearch,
  searchParam,
}: {
  products: [];
  getDataofSearch: Function;
  searchParam: string | Number | string[];
}) => {
  const [allProducts, setAllProducts] = useState<any[]>(products);
  const [page, setPage] = useState(10);

  const loadMoreProducts = useCallback(async () => {
    const newProducts = await getDataofSearch(searchParam, page);
    setAllProducts((prevProducts) => [
      ...prevProducts,
      ...newProducts.products,
    ]);
    setPage((prevPage) => prevPage + 10);
    setIsFetching(false);
  }, [!page]);

  const [isFetching, setIsFetching] = useInfiniteScroll(loadMoreProducts);

  return (
    <>
      {allProducts.map(
        (item: {
          images: [];
          id: React.Key | null | undefined;
          title: ReactNode;
        }) => (
          <Link
            href={`/product/${item.id}`}
            key={item.id}
            className="flex flex-col items-center"
          >
            {item.images.slice(0, 1).map((img: string | any, index) => (
              <Image
                key={index}
                src={img?.match(/https?:\/\/[^\s"]+/)[0] || ""}
                alt="product img"
                width={550}
                height={300}
                className="max-w-[25vmax]"
              />
            ))}
            <h2 className="text-[3vmin] font-semibold capitalize">
              {item.title}
            </h2>
          </Link>
        )
      )}
      {isFetching && <Loader />}
    </>
  );
};

export default SearchProducts;
