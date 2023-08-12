import { styled } from "styled-components"
import Image from "next/image"
interface ProductCardProps {
  name: string;
  thumbnail_image: string;
  category: string[];
}
const ProductCardContainer = styled.div`
  width:100%; 
  height:100%; 
  display:flex;
  flex-direction:column;
  border:1px solid;
  border-color:var(--border);
  box-sizing:border-box;
  font-family:SpaceGrotesk;
  border-radius:var(--border-radius);
  transition:box-shadow 0.2s ease-out;
  &:hover{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  }
`
const ProductCardImage = styled.div`
  box-sizing:border-box;
  width:100%;
  height:100%;
  padding:2rem;
  border-bottom:1px solid;
  border-color:var(--border);
`

const ProductCardInfo = styled.div`
  box-sizing:border-box;
  width:100%;
  display:flex;
  flex-direction:column;
  gap:0.4rem;
  padding:0.8rem;
`
const ProductCardCategorie = styled.div`
  display:flex;
  font-size:12px;
  font-weight:900;
  gap:0 0.4rem;
  color:#606060;
`
const ProductCardCategorieItem = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  border:1px solid;
  border-radius:100rem;
  padding:0 0.5rem;

`
const ProductCardName = styled.div`
  height:100%;
  font-size:14px;
  color:var(--text);
`
const ProductCard: React.FC<ProductCardProps> = (props) => {
  return (
    <ProductCardContainer>
      <ProductCardImage>
        <Image
          src={props.thumbnail_image}
          width={0}
          height={0}
          sizes="100vw"
          alt="productCard"
          style={{ width: '100%', height: 'auto' }} // optional
        />
      </ProductCardImage>
      <ProductCardInfo>
        <ProductCardName>{props.name}</ProductCardName>
        <ProductCardCategorie>{props.category.map((value, key) => <ProductCardCategorieItem key={key}>{value}</ProductCardCategorieItem>)}</ProductCardCategorie>
      </ProductCardInfo>
    </ProductCardContainer>
  )
}
export default ProductCard
