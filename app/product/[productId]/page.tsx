import ImageShowcase from "@/components/ImageShowcase";
import { FaCartPlus } from "react-icons/fa";

async function getProductDetails(id: string | Number) {
  try {
    const resp = await fetch(`${process.env.API_URI}/products/${id}`);
    const data = await resp.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
}
export default async function ProductId({
  params,
}: {
  params: { productId: string };
}) {
  const product = await getProductDetails(params.productId);

  return (
    <main className='mx-[3vmax] flex flex-col items-center gap-[2vmax] my-[3vmin]'>
      <div className='flex gap-[2vmax]'>
        <ImageShowcase images={product.images} />
        <div className='flex flex-col items-start gap-[2vmin]'>
          <h1 className='text-[6vmin] font-bold'>{product.title}</h1>
          <p className='text-[3vmin] font-semibold text-neutral-700 capitalize'>
            prize: {product.price}
          </p>
          <p className='text-[3vmin] text-neutral-700 font-semibold'>
            {product.category.name}
          </p>
          <button
            type='button'
            className='flex items-center text-[2.5vmin] capitalize gap-[1vmin] border border-neutral-700 px-[2vmin] py-[1vmin] rounded-md shadow hover:bg-neutral-700 hover:text-neutral-100'
          >
            <span>add to cart</span>
            <FaCartPlus />
          </button>
        </div>
      </div>
      <div>
        <p className='text-[3vmin] font-medium'>{product.description}</p>
      </div>
    </main>
  );
}
