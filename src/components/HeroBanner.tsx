import { styled } from "styled-components"
import Carousel from "nuka-carousel"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"


const CarouselContainer = styled.div`
  width: 100%;
  height: 500px;
  overflow:hidden;
  position:relative;
`;

const CarouselButton = styled.button`
  background-color:transparent;
  cursor:pointer;
  color:white;
`
const CarouselImage = styled.img`
  width:100%;
  height:500px;
  object-fit: cover;
  object-position: center center;

`
const CarouselOverlay = styled.div`
  position:absolute;
  width:100%;
  height:500px;
  top:0;
  background-color:rgba(17,17,17,0.8);
  color:white;
`
const CarouselOverlayContent = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
`
const CarouselOverlayHeading = styled.div`
  font-size:56px;
  font-family:SpaceGrotesk;
  font-weight:900;
  padding-bottom:0.5rem;
`
const CarouselOverlaySubHeading = styled.div`
  font-size:20px;
  padding-bottom:0.1rem;
`
const CarouselOverlayPara = styled.div`
  padding-bottom:0.3rem;
  width:600px;
  font-size:16px;
`
const CarouselOverlayButton = styled(Link)`
  width:200px;
  margin-top:1rem;
  font-size:14px;
  padding:0.8rem;
  background-color:var(--bg);
  border-radius:0.2rem;
  color:var(--text);
  display:flex;
  justify-content:center;
  align-items:center;
  color:var(--text);
  font-family:SpaceGrotesk;
  transition:background-color ease-in 0.2s,transform 1s ease-in;
  &:hover{
    background-color:var(--bg-emphasis);
  }
  svg {
    padding:0 5px;
    transition: transform 0.3s ease; 
  }
  &:hover svg {
    transform: rotate(-45deg);
  }
`

const HeroBanner: React.FC = () => {
  return (
    <>
      <Carousel autoplay={true} autoplayInterval={3000} pauseOnHover={true} wrapAround={true}
        renderCenterLeftControls={({ previousSlide }) => (<CarouselButton onClick={previousSlide} ><ChevronLeft /></CarouselButton>)}
        renderCenterRightControls={({ nextSlide }) => (<CarouselButton onClick={nextSlide} ><ChevronRight /></CarouselButton>)}
      >
        <CarouselContainer>
          <CarouselImage src="/img/bannerImg1.jpeg" />
          <CarouselOverlay>
            <CarouselOverlayContent>
              <CarouselOverlaySubHeading>WELCOME TO</CarouselOverlaySubHeading>
              <CarouselOverlayHeading>WIRELESS TECH</CarouselOverlayHeading>
              <CarouselOverlayPara>One Stop solution for all your wireless Needs!</CarouselOverlayPara>
              <CarouselOverlayPara>Cellphones-Accessories-Repairs-Bill payment-Simcards.</CarouselOverlayPara>
              <CarouselOverlayButton href="/products">SHOP NOW<ArrowRight size={18} color={"#0e0e10"} /></CarouselOverlayButton>
            </CarouselOverlayContent>
          </CarouselOverlay>
        </CarouselContainer>
        <CarouselContainer>
          <CarouselImage src="/img/bannerImg2.jpeg" />
          <CarouselOverlay>
            <CarouselOverlayContent>
              <CarouselOverlaySubHeading>WIRELESS TECH</CarouselOverlaySubHeading>
              <CarouselOverlayHeading>FAST, RELIABLE, SECURE</CarouselOverlayHeading>
              <CarouselOverlayPara>Discover Premium Cellphones, Expert Repairs, and Hassle-Free Bill Payments at Wireless Tech.</CarouselOverlayPara>
              <CarouselOverlayButton href="/">OUR SERVICES<ArrowRight size={18} color={"#0e0e10"} /></CarouselOverlayButton>
            </CarouselOverlayContent>
          </CarouselOverlay>
        </CarouselContainer>
      </Carousel>
    </>
  )
}
export default HeroBanner
