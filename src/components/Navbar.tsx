import Link from "next/link"
import Image from "next/image"
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import React from "react"

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
    to: "/shop",
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
  return (
    <div className="w-full border-b-[1px] border-[#d1d5db] sticky top-0 bg-slate-50 z-10 px-[1rem]">
      <div className="m-auto h-[60px] max-w-[1536px] flex justify-between items-center">
        <div>
          <Link href="/">
            <Image src="/img/wireless_tech_logo.png" alt="logo" width={80} height={40} />
          </Link>
        </div>
        <div className="flex text-sm font-bold">
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
  )
}
export default Navbar
