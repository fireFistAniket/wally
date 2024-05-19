"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const CategorySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [categories, setCategories] = useState([]);
  const [loading, setIsLoading] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  useEffect(() => {
    async function getAllCategories() {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/categories"
        );
        const data = await response.json();
        setCategories(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
    getAllCategories();
  }, [!categories]);

  return (
    <>
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {categories.map(
          (
            slide: {
              name: ReactNode | String;
              id: React.Key | null | undefined;
              image: string | StaticImport;
            },
            index
          ) => (
            <div
              key={slide.id}
              className={`w-full flex-shrink-0 flex items-center gap-[2vmin] p-5 text-center ${
                index === currentSlide ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
              <Image
                src={slide.image}
                alt="category cover"
                width={400}
                height={300}
                className="max-w-[30vmax] rounded-lg shadow-xl shadow-zinc-600"
              />
              <div className="flex flex-col items-start gap-[1.5vmax] ">
                <p className="text-[8vmin] capitalize font-bold italic">
                  {slide.name}
                </p>
                <Link href="/" className="flex items-center gap-2 capitalize">
                  <span>check out</span>
                  <FaArrowRightLong />
                </Link>
              </div>
            </div>
          )
        )}
      </div>
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white p-2"
        onClick={prevSlide}
      >
        <FaChevronLeft />
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white p-2"
        onClick={nextSlide}
      >
        <FaChevronRight />
      </button>
      <div className="flex justify-center mt-4 space-x-2">
        {categories.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </>
  );
};

export default CategorySlider;
