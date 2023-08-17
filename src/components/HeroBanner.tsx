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
            <img className="w-full h-full object-cover object-center" src={data.img} alt="Hero Banner Image" />
            <div className="absolute top-0 w-full h-full bg-[rgba(17,17,17,0.7)] text-white">
              <div className="w-full h-full flex flex-col justify-center items-center text-center">
                <h2 className="text-sm pb-[0.5rem] md:text-xl">{data.subHeading}</h2>
                <h1 className="text-3xl font-bold pb-[0.5rem] md:text-[56px]">{data.heading}</h1>
                <p className="w-[400px] md:w-[600px] text-base p-[0.5rem]">{data.para}</p>
                <Link href={data.href}
                  className="inline-block rounded bg-neutral-50 mt-2 px-12 py-3 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)]">
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
