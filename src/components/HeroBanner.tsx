import Carousel from "nuka-carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const heroBannerContent = [
  {
    heading: "WIRELESS TECH",
    subHeading: "WELCOME TO",
    para: "One Stop solution for all your wireless Needs.Cellphones-Accessories-Repairs-Bill payment-Simcards",
    buttonText: "SHOP NOW",
    img: "/img/bannerImg1.jpeg"
  },
  {
    heading: "FAST, RELIABLE, SECURE",
    subHeading: "WIRELESS TECH",
    para: "Discover Premium Cellphones, Expert Repairs, and Hassle-Free Bill Payments at Wireless Tech.",
    buttonText: "OUR SERVICES",
    img: "/img/bannerImg2.jpeg"
  }
]

const HeroBanner: React.FC = () => {
  return (
    <>
      <Carousel autoplay={false} autoplayInterval={3000} pauseOnHover={true} wrapAround={true}
        renderCenterLeftControls={({ previousSlide }) => (<div className="bg-transparent text-white cursor-pointer" onClick={previousSlide} ><ChevronLeft /></div>)}
        renderCenterRightControls={({ nextSlide }) => (<div className="bg-transparent text-white cursor-pointer" onClick={nextSlide} ><ChevronRight /></div>)}
      >
        {heroBannerContent.map((data, key) => (
          <div key={key} className="w-full h-[500px] overflow-hidden relative">
            <img className="w-full h-full object-cover object-center" src={data.img} />
            <div className="absolute top-0 w-full h-full bg-[rgba(17,17,17,0.7)] text-white">
              <div className="w-full h-full flex flex-col justify-center items-center text-center ">
                <div className="text-xl pb-[0.1rem]">{data.subHeading}</div>
                <div className="text-[56px] font-bold pb-[0.5rem]">{data.heading}</div>
                <div className="w-[600px] text-[16px]">{data.para}</div>
                <Link href="/" className="relative inline-flex items-center px-12 mt-4 py-3 overflow-hidden text-lg font-medium border-1 border-indigo-600 bg-white group text-[#222]">
                  <span className="absolute left-0 block w-full h-0 transition-all bg-[#FDCF41] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                  <span className="relative">{data.buttonText}</span>
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
