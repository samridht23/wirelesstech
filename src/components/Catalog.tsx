import { styled } from "styled-components"
import Link from "next/link"

const CatalogContainer = styled.div`
  max-width:var(--2xl);
  margin:auto;
  padding:4rem 0;
  position:relative;
  width:100%;
`
const CatalogContent = styled.div`
  width:100%;
  display:grid;
  gap:1rem;
  box-sizing: border-box;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  padding:1rem;
  justify-content: center;
`
const CatalogCard = styled.div`
  overflow:hidden;
  position:relative;
  border:1px solid; 
  border-radius:0.3rem;
  border-color:var(--border);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.2s ease-in-out;
  ${CatalogCard}:hover & {
    transform: scale(1.1);
  }
`;
const ImageOverlay = styled.div`
  position:absolute;
  top:0;
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`
const OverlayContent = styled.div`
  width:100%;
  padding:1rem;
  font-size:24px;
  font-family:SpaceGrotesk;
  color:var(--text-dark);
`
const Catalog: React.FC = () => {
  return (
    <div>
      <CatalogContainer>
        <CatalogContent>
          <Link href="/">
            <CatalogCard>
              <Image src="/img/catalogImg4.jpg" alt="catalog" />
              <ImageOverlay>
                <OverlayContent>Phones</OverlayContent>
              </ImageOverlay>
            </CatalogCard>
          </Link>
          <Link href="/">
            <CatalogCard>
              <Image src="/img/catalogImg2.jpg" alt="catalog" />
              <ImageOverlay>
                <OverlayContent>Repair</OverlayContent>
              </ImageOverlay>
            </CatalogCard>
          </Link>
          <Link href="/">
            <CatalogCard>
              <Image src="/img/catalogImg3.jpg" alt="catalog" />
              <ImageOverlay>
                <OverlayContent>Activation & <br /> Bill Payment</OverlayContent>
              </ImageOverlay>
            </CatalogCard>
          </Link>
          <Link href="/">
            <CatalogCard>
              <Image src="/img/catalogImg1.jpg" />
              <ImageOverlay>
                <OverlayContent>Accessories</OverlayContent>
              </ImageOverlay>
            </CatalogCard>
          </Link>
        </CatalogContent>
      </CatalogContainer>
    </div>
  )
}
export default Catalog
