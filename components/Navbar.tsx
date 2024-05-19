"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useRouter();

  const handelSubmit = async (e: any) => {
    e.preventDefault();
    navigation.push(`/search?q=${searchQuery}`);
  };

  return (
    <nav className="mx-[3vmax] my-[3vmin] flex items-center justify-between">
      <Link href="/" className="flex items-center gap-[2vmin]">
        <Image
          src="/logo.png"
          alt="logo"
          width={450}
          height={150}
          className="max-w-[6vmax]"
        />
        <h1 className="capitalize text-[2.7vmax] font-bold">wally</h1>
      </Link>
      <div className="flex items-center gap-[3vmin]">
        <ul className="flex items-center gap-[3vmin]">
          <li className="capitalize text-[1.8vmin] hover:font-bold font-medium">
            <Link href="/login">login</Link>
          </li>
          <li className="capitalize text-[1.8vmin] hover:font-bold font-medium">
            <Link href="/signup">create account</Link>
          </li>
        </ul>
        <form
          onSubmit={handelSubmit}
          className="flex items-center gap-[1vmin] bg-[#dadada] px-[1.3vmax] py-[1.2vmin]"
        >
          <input
            type="search"
            className="bg-transparent focus:outline-none text-[1.8vmin]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="text-neutral-700 text-[1.8vmin]">
            <FaSearch />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
