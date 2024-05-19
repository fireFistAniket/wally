import Link from "next/link";
import React, { Key, ReactNode } from "react";
import { FaHome } from "react-icons/fa";

async function getAllCategories() {
  try {
    const response = await fetch(`${process.env.API_URI}/products/categories`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function HeaderFilter() {
  const categories = await getAllCategories();

  return (
    <header className='bg-[#f6e033] px-[3vmax] py-[2vmin]'>
      <ul className='flex items-start flex-wrap gap-[2vmin] overflow-hidden'>
        <li>
          <Link
            href='/'
            className='flex items-center gap-[1vmin] text-neutral-800 text-[1.8vmin] whitespace-nowrap'
          >
            <FaHome />
            <span className='font-semibold capitalize'>All products</span>
          </Link>
        </li>
        {categories.map((item: string, index: Key | null | undefined) => (
          <li key={index}>
            <Link
              href={`/categories/${item}`}
              className='flex items-center gap-[1vmin] text-neutral-800 text-[1.8vmin] whitespace-nowrap'
            >
              <span className='font-semibold capitalize'>{item}</span>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
