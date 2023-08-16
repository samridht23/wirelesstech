import { useState, useEffect } from "react"
import { CheckIcon } from "lucide-react"
import * as Checkbox from '@radix-ui/react-checkbox';
interface FormProps {
  name: string,
  email: string,
  phoneNumber: string,
  message: string,
}
const composeOtpText = ({ name, email, phoneNumber, message }: FormProps) => {

  const otpText = `
    Customer Message from website.

    Customer Info
    Name: ${name}
    Email: ${email}
    Phone: ${phoneNumber}
    Message:${message}
  `;

  return otpText;
};
const Repair = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [message, setMessage] = useState("")
  const formData: FormProps = {
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    message: message
  };
  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: 'Query Message',
          toEmail: 'samridht23@gmail.com',
          otpText: composeOtpText(formData),
        }),
      });
      if (response.ok) {
        console.log("Message Sent")
      }
      else {
        console.log("Error sending Message")
      }
    } catch (err) {
      console.error('Error sending Message', err)
    }
  }
  return (
    <div>
      <section className="bg-white">
        <div className="container px-6 py-12 mx-auto">
          <div className="w-full lg:flex lg:items-center">
            <div className="w-full lg:mx-6 flex flex-col md:block justify-center items-start">
              <div className="text-[24px] font-bold capitalize lg:text-3xl text-[#222]">
                Get Free Estimate
              </div>
              <div className="mt-6 space-y-8 md:mt-8 text-[#222]">
                <p className="flex items-center flex-col">
                  <img
                    alt="Party"
                    src="/img/laptopRepair.jpg"
                    className="h-full w-full h-[256px] rounded object-cover"
                  />
                  <span className="mx-2 w-full py-4">
                    At Wireless Tech our Certified Repair Technician provides 100 % satisfaction of the Repairs done by Wireless Tech. Fast, Reliable, Secure and Quick Turnaround makes us very dependable. Wireless Tech offer warranty for any repairs done by us so feel free to Get your devices repair by us.
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-8 w-full lg:mx-6">
              <div
                className="w-full py-10 mx-auto overflow-hidden bg-white lg:max-w-xl">
                <h1 className="text-lg font-medium">
                  REPAIR LAPTOP, TABLET & PC
                </h1>
                <form className="mt-6 text-[#222]" onSubmit={handleSendMessage}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="">
                      <label className="block mb-2 text-sm">Brand</label>
                      <input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setName(e.target.value)} type="text" required className="text-sm block w-full px-5 py-3 mt-2 bg-white border border-[#d1d5db]  outline-none" />
                    </div>
                    <div className="">
                      <label className="block mb-2 text-sm">Model</label>
                      <input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setName(e.target.value)} type="text" required className="text-sm block w-full px-5 py-3 mt-2 bg-white border border-[#d1d5db]  outline-none" />
                    </div>
                  </div>
                  <div className="checkbox border py-4">
                    <Checkbox.Root
                      className="grid grid-cols-2 h-full w-full items-center justify-center rounded-[4px] bg-white outline-none"
                      defaultChecked
                      id="c1"
                    >
                      <div className="flex border">
                        <Checkbox.Indicator className="text-gray-500">
                          <CheckIcon />
                        </Checkbox.Indicator>
                        <label className="text-sm leading-none text-gray-600 ">
                          Accept terms and conditions.
                        </label>
                      </div>
                      <div className="flex border border-green-500">
                        <Checkbox.Indicator className="text-gray-500">
                          <CheckIcon />
                        </Checkbox.Indicator>
                        <label className="text-sm leading-none text-gray-600 ">
                          Accept terms and conditions.
                        </label>
                      </div>
                      <div className="flex border border-green-500">
                        <Checkbox.Indicator className="text-gray-500">
                          <CheckIcon />
                        </Checkbox.Indicator>
                        <label className="text-sm leading-none text-gray-600 ">
                          Accept terms and conditions.
                        </label>
                      </div>
                      <div className="flex border border-green-500">
                        <Checkbox.Indicator className="text-gray-500">
                          <CheckIcon />
                        </Checkbox.Indicator>
                        <label className="text-sm leading-none text-gray-600 ">
                          Accept terms and conditions.
                        </label>
                      </div>
                    </Checkbox.Root>
                  </div>
                  <div className="flex-1">
                    <label className="block mb-2 text-sm">Name</label>
                    <input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setName(e.target.value)} type="text" required className="text-sm block w-full px-5 py-3 mt-2 bg-white border border-[#d1d5db]  outline-none" />
                  </div>
                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm">Email address</label>
                    <input value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setEmail(e.target.value)} type="email" required
                      className="text-sm outline-none block w-full px-5 py-3 mt-2 bg-white border border-[#d1d5db]" />
                  </div>
                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm">Phone Number</label>
                    <input value={phoneNumber} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setPhoneNumber(e.target.value)} type="tel" id="phone" required name="phone" pattern="^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$"
                      className="text-sm outline-none block w-full px-5 py-3 mt-2 bg-white border border-[#d1d5db]"
                    />
                  </div>
                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm">Message</label>
                    <textarea maxLength={500} value={message} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => setMessage(e.target.value)} required className="resize-none text-sm outline-none block w-full h-32 px-5 py-3 mt-2 bg-white border border-[#d1d5db] md:h-48"></textarea>
                  </div>
                  <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#222]">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div >
      </section >
    </div >
  )
}
export default Repair 
