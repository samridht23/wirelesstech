import Link from "next/link"

const catalogData = [
  {
    href: "/products",
    imgUrl: "/img/catalogImg4.jpg",
    heading: "Phones",
    subHeading: "Explore the Latest Phone Models and Features",
  },
  {
    href: "/services",
    imgUrl: "/img/catalogImg2.jpg",
    heading: "Repair",
    subHeading: "Trustworthy Repair Services for All Your Devices",
  },
  {
    href: "/services",
    imgUrl: "/img/catalogImg3.jpg",
    heading: "Activation & Bill Payment",
    subHeading: "Convenient Bill Payment Options for Your Ease",
  },
  {
    href: "/products#accessories",
    imgUrl: "/img/catalogImg1.jpg",
    heading: "Accessories",
    subHeading: "Enhance Your Style with Trendy and Functional Accessories",
  },
]
const Catalog: React.FC = () => {
  return (
    <>
      <div className="max-w-[1536px] m-auto py-[4rem] px-[1rem] relative w-full flex justify-center">
        <div className="grid gap-[1rem] border-box grid-cols-2 lg:grid-cols-4">
          {catalogData.map((data, key) => (
            <Link key={key} href={data.href} className="rounded-lg overflow-hidden relative block border border-[#d1d5db]">
              <div className="relative h-[200px] md:h-[290px] lg:h-[350px]">
                <img
                  src={data.imgUrl}
                  alt="Services Catalog"
                  className="inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-start justify-end p-2 md:p-6  bg-[rgba(17,17,17,0.6)]">
                <h3 className="text-xl font-medium text-white">{data.heading}</h3>
                <p className="mt-1.5 max-w-[40ch] text-xs text-white">
                  {data.subHeading}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
export default Catalog
