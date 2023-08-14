const offerData = [
  {
    label: "Holiday Deals: Up to 20% off on selected phones",
    img: "/img/offer1.jpg"
  },
  {
    label: "Free Accessories on Bill payments",
    img: "/img/offer3.jpg"
  }
]

const Offer = () => {
  return (
    <div className="max-w-[1536px] m-auto px-[1rem] py-[6rem] box-border w-full" >
      <div className="flex justify-center flex-col md:flex-row items-center w-full box-border gap-[1rem]">
        {offerData.map((data, key) => (
          <div key={key} className="relative w-full flex overflow-hidden">
            <img src={data.img} className="w-full object-cover h-[160px]" />
            <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center bg-[rgba(17,17,17,0.5)] text-white">
              <div className="flex p-4 text-center text-2xl font-bold">
                {data.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Offer
