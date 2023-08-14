import Link from "next/link"
import Image from "next/image"
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Twirl as Hamburger } from 'hamburger-react'
import { useState } from "react"
import { useSpring, animated } from '@react-spring/web'
import { ChevronRightIcon } from "lucide-react"


interface NavItemsProps {
  label: string,
  to: string,
}
const NavItems: NavItemsProps[] = [
  {
    label: "HOME",
    to: "/"
  },
  {
    label: "ABOUT US",
    to: "/about"
  },
  {
    label: "SHOP",
    to: "/products",
  },
  {
    label: "SERVICES",
    to: "/services"
  },
  {
    label: "GALLERY",
    to: "/gallery"
  },
  {
    label: "CONTACT US",
    to: "/contact"
  }
]

const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState(false)
  const handleNavbarClick = () => {
    setOpen(false)
  }
  const move = useSpring({
    transform: isOpen ? 'translateX(0%)' : 'translateX(100%)'
  })
  return (
    <div>
      <div className="w-full border-b-[1px] border-[#d1d5db] fixed top-0 right-0 bg-slate-50 z-30 px-[1rem]">
        <div className="m-auto h-[60px] max-w-[1536px] flex justify-between items-center">
          <div>
            <Link href="/">
              <Image src="/img/wireless_tech_logo.png" alt="Logo" width={80} height={40} />
            </Link>
          </div>
          <div className="block sm:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
          </div>
          <div className="flex text-sm font-bold hidden sm:block">
            <div className="flex">
              {NavItems.map((item, key) => (
                <div className="px-3 last:px-0" key={key} >
                  {
                    item.label === "SHOP" ? (
                      <NavigationMenu.Root className="relative z-10">
                        <NavigationMenu.List>
                          <NavigationMenu.Item>
                            <NavigationMenu.Trigger>
                              <Link className="group" href="/products">
                                SHOP
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#FDCF41]"></span>
                              </Link>
                            </NavigationMenu.Trigger>
                            <NavigationMenu.Content className="flex bg-slate-50 shadow-md shadow-zinc-700 flex-col absolute m-1 w-[150px] box-border rounded overflow-hidden">
                              <Link className="group flex p-4 border-b-[1px] border-gray-[#d1d5db]" href="/">
                                <div>
                                  APPLE
                                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#FDCF41]"></span>
                                </div>
                              </Link>
                              <Link className="group flex p-4 border-b-[1px] border-gray-[#d1d5db]" href="/">
                                <div>
                                  SAMSUNG
                                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#FDCF41]"></span>
                                </div>
                              </Link>
                              <Link className="group flex p-4 border-b-[1px] border-gray-[#d1d5db]" href="/">
                                <div>
                                  AMAZON
                                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#FDCF41]"></span>
                                </div>
                              </Link>
                              <Link className="group flex p-4 border-b-[1px] border-gray-[#d1d5db]" href="/">
                                <div>
                                  ACCESSORIES
                                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#FDCF41]"></span>
                                </div>
                              </Link>
                            </NavigationMenu.Content>
                          </NavigationMenu.Item>
                        </NavigationMenu.List>
                      </NavigationMenu.Root>
                    )
                      :
                      (
                        <Link className="group" href={item.to}>
                          <div>
                            {item.label}
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#FDCF41]"></span>
                          </div>
                        </Link>
                      )
                  }
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <animated.div style={move} className="bg-white w-full min-h-screen fixed z-20 top-10">
        <div className="w-full h-[100%] text-xl flex pt-4 flex-col">
          {NavItems.map((data, key) => (
            <Link key={key} href={data.to} className="border-y flex w-full justify-between items-center" onClick={handleNavbarClick}>
              <div className="py-6 px-4 w-full">
                {data.label}
              </div>
              <div className="flex px-4">
                <ChevronRightIcon size={20} />
              </div>
            </Link>
          ))}
        </div>
      </animated.div>
    </div>
  )
}
export default Navbar
