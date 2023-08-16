import Carousel from "nuka-carousel"
import data from "@/data/featuredProducts.json"
import FeaturedProductCard from "@/components/FeaturedProductCard"

const FeaturedProducts = () => {
  return (
    <div className="max-w-[1000px] m-auto py-[4rem] px-[1rem] box-border">
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-center text-[28px] font-bold pb-[1rem]">Featured Products</div>
        <div className="hidden md:block pb-[1rem]">
          <Carousel autoplay={true} autoplayInterval={2000} wrapAround={true} slidesToShow={3} withoutControls={true} pauseOnHover={false}>
            {data.map((data, key) => (
              <div className="p-2" key={key}>
                <FeaturedProductCard name={data.name} thumbnail_image={data.thumb_img} category={data.category} product_value={data.product_value} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="block md:hidden pb-[1rem]">
          <Carousel autoplay={true} autoplayInterval={2000} wrapAround={true} slidesToShow={2} withoutControls={true} pauseOnHover={false}>
            {data.map((data, key) => (
              <div key={key} className="p-2">
                <FeaturedProductCard name={data.name} thumbnail_image={data.thumb_img} category={data.category} product_value={data.product_value} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}
export default FeaturedProducts
