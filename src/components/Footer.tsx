import Link from "next/link"
import { PhoneIcon, InstagramIcon, FacebookIcon, TwitterIcon } from "lucide-react"
import { ReactNode } from 'react';
import Image from "next/image"

const quickLinks = [
  {
    href: "/about",
    label: "About Us"
  },
  {
    href: "/products",
    label: "Shop"
  },
  {
    href: "/services",
    label: "Services"
  },
  {
    href: "/gallery",
    label: "Gallery"
  },
  {
    href: "/contact",
    label: "Contact Us"
  },
]
const category = [
  {
    href: "/products#iphone",
    label: "iPhone"
  },
  {
    href: "/products#ipad",
    label: "iPad"
  },
  {
    href: "/products#apple_watch",
    label: "Apple Watch"
  },
  {
    href: "/products#samsung",
    label: "Samsung"
  },
  {
    href: "/products#amazon",
    label: "Amazon"
  },
  {
    href: "/products#accessories",
    label: "Accessories"
  }
]
const Footer = () => {
  return (
    <>
      <footer className="bg-white border-t border-[#d1d5db]">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="flex flex-col justify-between items-center">
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 py-4">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Quick Links</h2>
                <ul className="text-gray-500 text-sm">
                  {
                    quickLinks.map((data, key) => (
                      <li key={key} className="mb-4">
                        <Link href={data.href} className="hover:underline">{data.label}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Categories</h2>
                <ul className="text-gray-500 text-sm">
                  {
                    category.map((data, key) => (
                      <li key={key} className="mb-4">
                        <Link href={data.href} className="hover:underline ">{data.label}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Contact Info</h2>
                <ul className="text-gray-500 text-sm">
                  <li className="mb-4">
                    Mon - Sat : 9 AM- 8 PM
                    <br />
                    Sun : 10 AM - 8 PM
                  </li>
                  <li className="mb-4">
                    160-11 Hillside Ave, Jamaica, NY 11432
                  </li>
                  <li className="mb-4">
                    718-526-0251
                  </li>
                  <li className="mb-4">
                    <a href="mailto:wtechny@gmail.com">wtechny@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center ">© {new Date().getFullYear()} <span>Wireless Tech</span>. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

