import data from "@/data/newArrivals.json"
import ProductCard from "@/components/ProductCard"

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
      <div className="w-full flex gap-[1rem] flex-wrap justify-center">
        {data.map((data, key) => (
          <div key={key}>
            <ProductCard name={data.name} thumbnail_image={data.thumb_img} category={data.category} />
          </div>
        ))}
      </div>
    </div>
  )
}
export default PopularProduct;
