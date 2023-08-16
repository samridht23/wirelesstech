import Carousel from "nuka-carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const heroBannerContent = [
  {
    heading: "WIRELESS TECH",
    subHeading: "WELCOME TO",
    para: "One Stop solution for all your wireless Needs.Cellphones-Accessories-Repairs-Bill payment-Simcards",
    buttonText: "SHOP NOW",
    img: "/img/bannerImg1.jpeg",
    href: "/products"
  },
  {
    heading: "FAST, RELIABLE, SECURE",
    subHeading: "WIRELESS TECH",
    para: "Discover Premium Cellphones, Expert Repairs, and Hassle-Free Bill Payments at Wireless Tech.",
    buttonText: "OUR SERVICES",
    img: "/img/bannerImg2.jpeg",
    href: "/services"
  }
]

const HeroBanner: React.FC = () => {
  return (
    <>
      <Carousel autoplay={true} autoplayInterval={3000} pauseOnHover={true} wrapAround={true}
        renderCenterLeftControls={({ previousSlide }) => (<div className="bg-transparent text-white cursor-pointer" onClick={previousSlide} ><ChevronLeft /></div>)}
        renderCenterRightControls={({ nextSlide }) => (<div className="bg-transparent text-white cursor-pointer" onClick={nextSlide} ><ChevronRight /></div>)}
      >
        {heroBannerContent.map((data, key) => (
          <div key={key} className="w-full h-[500px] overflow-hidden relative">
            <img className="w-full h-full object-cover object-center" src={data.img} />
            <div className="absolute top-0 w-full h-full bg-[rgba(17,17,17,0.7)] text-white">
              <div className="w-full h-full flex flex-col justify-center items-center text-center ">
                <div className="text-sm pb-[0.5rem] md:text-xl">{data.subHeading}</div>
                <div className="text-3xl font-bold pb-[0.5rem] md:text-[56px]">{data.heading}</div>
                <div className="w-[400px] md:w-[600px] text-base p-[0.5rem]">{data.para}</div>
                <Link href={data.href} className="relative inline-flex items-center px-12 mt-4 py-3 overflow-hidden text-lg font-medium border-1 border-indigo-600 bg-[#fdcf41] group text-[#222] hover:bg-[#222] hover:text-white transition">
                  <span className="relative text-sm md:text-base">{data.buttonText}</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  )
}
export default HeroBanner
