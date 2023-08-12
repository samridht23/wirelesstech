import Link from "next/link"
import Image from "next/image"
import { styled, keyframes } from "styled-components"
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

const Nav = styled.nav`
  width:100%;
  border-bottom: 1px solid;
  border-color: var(--border);
  position:sticky;
  top:0;
  z-index:10;
  background-color:var(--bg);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`
const NavbarContainer = styled.div`
  margin:auto;
  height:60px;
  max-width:var(--2xl);
  justify-content:space-between;
  align-items:center;
  display:flex;
  padding:0 1rem;
  font-family:SpaceGrotesk;
  color:var(--text);
  font-weight:900;
`
const NavLeft = styled.div`
`
const NavRight = styled.div`
  display:flex;
  font-size:14px;
`
const NavItem = styled.div`
  padding:0 0.5rem;
  &:last-child{
    padding:0;
  }
`
const NavLinks = styled.div`
  display:flex;
  @media(max-width:768px){
    display:none;
  }
`
const NavHamburger = styled.div`
`
const NavigationMenuRoot = styled(NavigationMenu.Root)`
  position:relative;
  z-index:10;
`
const NavigationMenuContent = styled(NavigationMenu.Content)`
  display:flex;
  background-color:var(--bg);
  flex-direction:column;
  position:absolute;
  margin:1rem 0;
  width:150px;
  box-sizing:border-box;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius:0.2rem;
  overflow:hidden;
`
const NavigationMenuList = styled(NavigationMenu.List)`
  list-style:none;
`
const LinkHoverAnimation = styled.div`
  display: inline-block;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 4px;
    bottom: 0;
    left: 0;
    background-color: var(--accent);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`
const HoverAnimation = styled.div`
  display: inline-block;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 4px;
    bottom: 0;
    left: 0;
    background-color: var(--accent);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
`;

const NavigationMenuLink = styled(Link)`
  padding: 1rem;
  border-bottom: 1px solid;
  border-color: var(--border);
  &:hover ${HoverAnimation}::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
const NavigationMenuSub = styled(NavigationMenu.Sub)`
`

const NavigationMenuItem = styled(NavigationMenu.Item)`
`
const NavigationSubMenuItem = styled(NavigationMenu.Item)`
`
const NavigationSubMenuTrigger = styled(NavigationMenu.Trigger)`
  width:100%;
  display:flex;
  border-bottom: 1px solid;
  border-color: var(--border);
  padding: 1rem;
  &:hover ${HoverAnimation}::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`
const Navbar: React.FC = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLeft >
          <Link href="/">
            <Image src="/img/wireless_tech_logo.png" alt="logo" width={80} height={40} />
          </Link>
        </NavLeft>
        <NavRight>
          <NavLinks>
            {NavItems.map((item, key) => (
              <NavItem key={key} >
                {
                  item.label === "SHOP" ? (
                    <NavigationMenuRoot>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenu.Trigger>
                            <LinkHoverAnimation>
                              SHOP
                            </LinkHoverAnimation>
                          </NavigationMenu.Trigger>
                          <NavigationMenuContent>
                            <NavigationMenuLink href="/">
                              <HoverAnimation>
                                APPLE
                              </HoverAnimation>
                            </NavigationMenuLink>
                            <NavigationMenuLink href="/">
                              <HoverAnimation>
                                SAMSUNG
                              </HoverAnimation>
                            </NavigationMenuLink>
                            <NavigationMenuLink href="/">
                              <HoverAnimation>
                                AMAZON
                              </HoverAnimation>
                            </NavigationMenuLink>
                            <NavigationMenuLink href="/">
                              <HoverAnimation>
                                ACCESSORIES
                              </HoverAnimation>
                            </NavigationMenuLink>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenuRoot>
                  )
                    :
                    (
                      <Link href={item.to}>
                        <LinkHoverAnimation>
                          {item.label}
                        </LinkHoverAnimation>
                      </Link>
                    )
                }
              </NavItem>
            ))}
          </NavLinks>
        </NavRight>
      </NavbarContainer>
    </Nav >
  )
}
export default Navbar
