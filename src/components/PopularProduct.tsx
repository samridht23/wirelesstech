import data from "@/data/newArrivals.json"
import ProductCard from "@/components/ProductCard"
import Link from "next/link"

const PopularProduct = () => {
  return (
    <div className="max-w-[1536px] m-auto px-[2rem] py-[1rem] box-border w-full">
      <div className="flex justify-center py-[1rem] items-center flex-col">
        <div className="text-[28px] p-[0.5rem] font-bold">
          NEW ARRIVALS
        </div>
        <p className="max-w-md mx-auto mt-2 mb-4 text-gray-500 text-center">
          Next-Level Tech: Dive into Our Newest Arrivals Collection
        </p>
      </div>
      <div className="m-auto grid grid-cols-2 md:grid-cols-4 max-w-[1000px] flex-wrap justify-center">
        {data.map((data, key) => (
          <Link key={key} href={`/products/${data.product_value}`} className="p-2">
            <ProductCard name={data.name} thumbnail_image={data.thumb_img} category={data.category} />
          </Link>
        ))}
      </div>
    </div>
  )
}
export default PopularProduct;
