import { PhoneIcon, MapPinIcon, MailIcon } from "lucide-react"
const Contact = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="container px-6 py-12 mx-auto">
          <div className="w-full lg:flex lg:items-center">
            <div className="w-full lg:mx-6 flex flex-col md:block justify-center items-start">
              <div className="text-[24px] font-bold capitalize lg:text-3xl text-[#222]">
                Feel free to contact us
              </div>
              <div className="mt-6 space-y-8 md:mt-8 text-[#222]">
                <p className="flex items-center">
                  <MapPinIcon size={20} />
                  <span className="mx-2 truncate w-full">
                    160-11 Hillside Ave, Jamaica, NY 11432
                  </span>
                </p>
                <p className="flex items-center ">
                  <PhoneIcon size={20} />
                  <a href="tel:718-526-0251" className="mx-2 truncate w-full">718-526-0251</a>
                </p>
                <p className="flex items-center">
                  <MailIcon size={20} />
                  <a href="mailto:wtechny@gmail.com" className="mx-2 truncate w-full">wtechny@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="mt-8 w-full lg:mx-6">
              <div
                className="w-full py-10 mx-auto overflow-hidden bg-white lg:max-w-xl">
                <h1 className="text-lg font-medium">
                  Talk with us today
                </h1>
                <form className="mt-6 text-[#222]">
                  <div className="flex-1">
                    <label className="block mb-2 text-sm">Full Name</label>
                    <input type="text" required placeholder="Name" className="text-sm block w-full px-5 py-3 mt-2 placeholder-gray-400 bg-white border border-[#d1d5db]  outline-none" />
                  </div>
                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm">Email address</label>
                    <input type="email" required placeholder="Email"
                      className="text-sm outline-none block w-full px-5 py-3 mt-2 placeholder-gray-400 bg-white border border-[#d1d5db]" />
                  </div>
                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm">Phone Number</label>
                    <input type="tel" id="phone" required name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Phone Number"
                      className="text-sm outline-none block w-full px-5 py-3 mt-2 placeholder-gray-400 bg-white border border-[#d1d5db]"
                    />
                  </div>
                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm">Message</label>
                    <textarea required className="resize-none text-sm outline-none block w-full h-32 px-5 py-3 mt-2 placeholder-gray-400 bg-white border border-[#d1d5db] md:h-48" placeholder="Message"></textarea>
                  </div>

                  <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#222]">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Contact
