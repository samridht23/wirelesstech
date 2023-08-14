import Link from "next/link"
import { PhoneIcon, InstagramIcon, FacebookIcon, TwitterIcon } from "lucide-react"
import { ReactNode } from 'react';

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-20 pb-10 lg:pt-[80px] lg:pb-20 box-border border-t border-[#d1d5db]">
        <div className="container max-w-[1236px] m-auto">
          <div className="flex flex-wrap mx-4">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="w-full mb-10">
                <Link href="/" className="pb-9 inline-block text-[2rem] font-bold">
                  Wireless Tech
                </Link>
                <p className="flex items-center text-sm font-medium text-dark">
                  <span className="mr-3 text-primary">
                    <PhoneIcon size={20} />
                  </span>
                  <span>+012 (345) 678 99</span>
                </p>
              </div>
            </div>
            <LinkGroup header="Quick Links">
              <NavLink link="/about" label="About Us" />
              <NavLink link="/products" label="Shop" />
              <NavLink link="/services" label="Services" />
              <NavLink link="/gallery" label="Gallery" />
              <NavLink link="/contact" label="Contact Us" />
            </LinkGroup>
            <LinkGroup header="Categories">
              <NavLink link="#" label="iPhone" />
              <NavLink link="#" label="iPad" />
              <NavLink link="#" label="Apple Watch" />
              <NavLink link="#" label="Samsung" />
              <NavLink link="#" label="Samsung" />
              <NavLink link="#" label="Amazon" />
              <NavLink link="#" label="Accessories" />
            </LinkGroup>
            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="w-full mb-10">
                <h4 className="text-lg font-semibold mb-9 text-dark">
                  Follow us On
                </h4>
                <div className="flex items-center mb-6">
                  <a
                    href="https://business.facebook.com/Wirelesstech-509981069207150/"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-dark hover:border-primary hover:bg-primary hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <FacebookIcon size={20} />
                  </a>
                  <a
                    href="https://business.facebook.com/Wirelesstech-509981069207150/"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-dark hover:border-primary hover:bg-primary hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <TwitterIcon size={20} />
                  </a>
                  <a
                    href="https://business.facebook.com/Wirelesstech-509981069207150/"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-dark hover:border-primary hover:bg-primary hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <InstagramIcon size={20} />
                  </a>
                </div>
                <p className="text-base text-body-color">
                  {" "}
                  © {new Date().getFullYear()} Wireless Tech{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

interface LinkGroupProps {
  children: ReactNode;
  header: string;
}

interface NavLinkProps {
  link: string;
  label: string;
}
const LinkGroup: React.FC<LinkGroupProps> = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="w-full mb-10">
          <h4 className="text-lg font-semibold mb-9 text-dark"> {header} </h4>
          <ul>{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink: React.FC<NavLinkProps> = ({ link, label }) => {
  return (
    <div>
      <li>
        <Link
          href={link}
          className={`inline-block mb-2 text-base leading-loose text-body-color hover:text-primary`}
        >
          {label}
        </Link>
      </li>
    </div>
  );
};
