import { styled } from "styled-components"
const OfferContainer = styled.div`
  max-width:var(--2xl);
  margin:auto;
  padding:6rem 2rem;
  box-sizing:border-box;
  width:100%;
`
const OfferBox = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  gap:1rem;
  box-sizing:border-box;
`
const OfferBanner = styled.div`
  position:relative;
  width:100%;
  display:flex;
  border:1px solid;
  border-color:var(--border);
  border-radius:0.4rem;
  overflow:hidden;
`
const Image = styled.img`
  width: 100%;
  height: 160px;
  transition: transform 0.2s ease-in-out;
  object-fit:cover;
`;
const ImageOverlay = styled.div`
  position:absolute;
  top:0;
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color:var(--text-dark);
  background-color:rgba(17,17,17,0.5);
`

const ImageOverlayText = styled.div`
  display:flex;
  font-weight:bold;
  font-family:SpaceGrotesk;
  font-size:24px;
  box-sizing:border-box;
  padding:1rem;
  text-align:center;
`

const Offer = () => {
  return (
    <OfferContainer>
      <OfferBox>
        <OfferBanner>
          <Image src="/img/offer1.jpg" />
          <ImageOverlay>
            <ImageOverlayText>
              Holiday Deals:
              Up to 20% off on selected phones
            </ImageOverlayText>
          </ImageOverlay>
        </OfferBanner>
        <OfferBanner>
          <Image src="/img/offer3.jpg" />
          <ImageOverlay>
            <ImageOverlayText>
              Free Accessories
              on
              Bill payments
            </ImageOverlayText>
          </ImageOverlay>
        </OfferBanner>
      </OfferBox>
    </OfferContainer>
  )
}
export default Offer
