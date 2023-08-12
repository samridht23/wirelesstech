import { styled } from "styled-components"
import Link from "next/link"
import { TwitterIcon, FacebookIcon, InstagramIcon } from "lucide-react"
import Image from "next/image"

const FooterContainer = styled.footer`
  width:100%;
  background-color:#222;
`
const FooterContent = styled.div`
  width:100%;
  max-width:var(--2xl);
  margin:auto;
  box-sizing:border-box;
  color:var(--text-dark);
  padding:1rem 3rem;
`
const FooterContainerTop = styled.div`
  display:flex;
  width:100%;
  justify-content:space-between;
  padding-bottom:8rem;
  gap:1rem;
  @media(max-width:868px){
    flex-direction:column;
  }
`
const FooterContainerBottom = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  a{
    color:var(--text-dark);
  }
  @media(max-width:668px){
    flex-direction:column;
    align-items:center;
  }

`
const FooterContainerLeft = styled.div`
  font-size:28px;
  font-family:SpaceGrotesk;
  font-weight:900;
  width:100%;
  padding:1.5rem 0;
  @media(max-width:1200px){
    display:none;
  }
`
const FooterCenterContentHeading = styled.div`
  font-weight:900;
  font-size:16px;
  font-family:SpaceGrotesk;
  padding:1.5rem 0;
`
const FooterRightContentHeading = styled.div`
  font-weight:900;
  font-size:16px;
  font-family:SpaceGrotesk;
  padding:1.5rem 0;
`
const FooterCenterContentList = styled.div`
  padding:0.3rem 0;
  font-size:13px;
  a{
    color:var(--text-dark);
    &:hover{
      color:var(--accent);
    }
  }
  
`
const FooterContainerCenter = styled.div`
  display:flex;
  width:100%;
  gap:3rem;
  justify-content:flex-start;
  @media(max-width:668px){
    flex-direction:column;
  }
`
const FooterContainerRight = styled.div`
  display:flex;
  width:100%;
  flex-direction:column;
`
const FooterContainerRightLogos = styled.div`
  display:flex;
  gap:0 1rem;
`
const FooterAuthorizedDealer = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;
  gap:0.5rem;
  max-width:300px;
`
const FooterContainerCenterContent1 = styled.div`
  font-size:14px;
  min-width:180px;
`
const FooterContainerCenterContent2 = styled.div`
  font-size:14px;
  min-width:150px;
`
const FooterContainerCenterContent3 = styled.div`
  font-size:14px;
  min-width:150px;
`
const FooterContainerBottomLogo = styled.div`
  font-size:24px;
  font-family:SpaceGrotesk;
  font-weight:900;
    display:none;
  @media(max-width:1200px){
    display:block;
  }
`
const FooterContainerBottomPolicy = styled.div`
  display:flex;
  gap:1rem;
  font-size:12px;
`
const FooterSocialIcons = styled.div`
`
const FooterAuthorizedDealerLogo = styled.div`
  display:flex;
  width:100%;
`
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <FooterContent>
        <FooterContainerTop>
          <FooterContainerLeft>
            WIRELESS TECH
          </FooterContainerLeft>
          <FooterContainerCenter>
            <FooterContainerCenterContent1>
              <FooterCenterContentHeading>OPENING HOURS</FooterCenterContentHeading>
              <FooterCenterContentList>Mon - Sat : 9 AM- 8 PM
              </FooterCenterContentList>
              <FooterCenterContentList>
                Sun : 10 AM - 8 PM
              </FooterCenterContentList>
              <FooterCenterContentHeading>CONTACT INFO</FooterCenterContentHeading>
              <FooterCenterContentList>160-11 Hillside Ave, Jamaica, NY 11432 </FooterCenterContentList>
              <FooterCenterContentList>718-526-0251</FooterCenterContentList>
              <FooterCenterContentList>
                <a href="wtechny@gmail.com">wtechny@gmail.com</a>
              </FooterCenterContentList>
            </FooterContainerCenterContent1>
            <FooterContainerCenterContent2>
              <FooterCenterContentHeading>QUICK LINKS</FooterCenterContentHeading>
              <FooterCenterContentList>
                <Link href="/">
                  About Us
                </Link>
              </FooterCenterContentList>
              <FooterCenterContentList>
                <Link href="/">
                  Shop
                </Link>
              </FooterCenterContentList>
              <FooterCenterContentList>
                <Link href="/">
                  Services
                </Link>
              </FooterCenterContentList>
              <FooterCenterContentList>
                <Link href="/">
                  Gallery
                </Link>
              </FooterCenterContentList>
              <FooterCenterContentList>
                <Link href="/">
                  Contact Us
                </Link>
              </FooterCenterContentList>
            </FooterContainerCenterContent2>
            <FooterContainerCenterContent3>
              <FooterCenterContentHeading>CATEGORIE</FooterCenterContentHeading>
              <FooterCenterContentList>
                <Link href="/">
                  iphone
                </Link>
              </FooterCenterContentList>
              <FooterCenterContentList>
                <Link href="/">
                  ipad
                </Link>
              </FooterCenterContentList>
              <FooterCenterContentList>
                <Link href="/">
                  Apple Watch
                </Link>
              </FooterCenterContentList>
              <FooterCenterContentList>
                <Link href="/">
                  Samsung
                </Link>
              </FooterCenterContentList>
              <FooterCenterContentList>
                <Link href="/">
                  Amazon
                </Link>
              </FooterCenterContentList>
              <FooterCenterContentList>
                <Link href="/">
                  Accessories
                </Link>
              </FooterCenterContentList>
            </FooterContainerCenterContent3>
          </FooterContainerCenter>
          <FooterContainerRight>
            <FooterRightContentHeading>
              FOLLOW US
            </FooterRightContentHeading>
            <FooterContainerRightLogos>
              <Link href="/">
                <FooterSocialIcons>
                  <TwitterIcon size={28} stroke="white" strokeWidth={1} />
                </FooterSocialIcons>
              </Link>
              <Link href="/">
                <FooterSocialIcons>
                  <FacebookIcon size={28} stroke="white" strokeWidth={1} />
                </FooterSocialIcons>
              </Link>
              <Link href="/">
                <FooterSocialIcons>
                  <InstagramIcon size={28} stroke="white" strokeWidth={1} />
                </FooterSocialIcons>
              </Link>
            </FooterContainerRightLogos>
            <FooterRightContentHeading>
              AUTHORIZED DEALER
            </FooterRightContentHeading>
            <FooterAuthorizedDealer>
              <FooterAuthorizedDealerLogo>
                <Image src="/img/redPocket.png" width={80} height={30} alt="authorizedDealer" />
              </FooterAuthorizedDealerLogo>
              <FooterAuthorizedDealerLogo>
                <Image src="/img/cricketLogo.png" width={60} height={20} alt="authorizedDealer" />
              </FooterAuthorizedDealerLogo>
              <FooterAuthorizedDealerLogo>
                <Image src="/img/verizonLogo.png" width={80} height={20} alt="authorizedDealer" />
              </FooterAuthorizedDealerLogo>
            </FooterAuthorizedDealer>
            <FooterAuthorizedDealer>
              <FooterAuthorizedDealerLogo>
                <Image src="/img/lycaMobile.png" width={80} height={32} alt="authorizedDealer" />
              </FooterAuthorizedDealerLogo>
              <FooterAuthorizedDealerLogo>
                <Image src="/img/h2oWireless.jpg" width={45} height={45} alt="authorizedDealer" />
              </FooterAuthorizedDealerLogo>
            </FooterAuthorizedDealer>
            <FooterAuthorizedDealer>
              <FooterAuthorizedDealerLogo>
                <Image src="/img/ultraMobileLogo.jpg" width={45} height={45} alt="authorizedDealer" />
              </FooterAuthorizedDealerLogo>
              <FooterAuthorizedDealerLogo>
                <Image src="/img/simpleMobileLogo.png" width={60} height={32} alt="authorizedDealer" />
              </FooterAuthorizedDealerLogo>
            </FooterAuthorizedDealer>
          </FooterContainerRight>
        </FooterContainerTop>
        <FooterContainerBottom>
          <FooterContainerBottomLogo>
            <Link href="/">
              WIRELESS TECH
            </Link>
          </FooterContainerBottomLogo>
          <FooterContainerBottomPolicy>
            <div>
              © {currentYear} WIRELESS TECH
            </div>
            <Link href="/">Privacy</Link>
            <Link href="/">Terms of Use</Link>
          </FooterContainerBottomPolicy>
        </FooterContainerBottom>
      </FooterContent>
    </FooterContainer>
  )
}
export default Footer;
