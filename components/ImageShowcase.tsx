"use client";
import Image from "next/image";
import React, { Key, useState } from "react";

const ImageShowcase = ({ images }: { images: [] | any[] }) => {
  const [currentImg, setCurrentImg] = useState<string | any>(images[0]);
  return (
    <div className='flex flex-col items-center gap-[1.7vmin]'>
      <div>
        <Image
          src={currentImg?.match(/https?:\/\/[^\s"]+/)[0] || ""}
          alt='product img'
          width={550}
          height={300}
          className='max-w-[40vmax]'
        />
      </div>
      <div className='flex items-center justify-between self-stretch gap-[2vmin]'>
        {images.map(
          (img: string | object | any, index: Key | null | undefined) => (
            <Image
              key={index}
              src={img?.match(/https?:\/\/[^\s"]+/)[0] || ""}
              alt='product img'
              width={550}
              height={300}
              className={`max-w-[10vmax] cursor-pointer rounded-md ${
                img === currentImg ? "border-[1.5vmin]" : "border-0"
              }`}
              onClick={() => setCurrentImg(img)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ImageShowcase;
