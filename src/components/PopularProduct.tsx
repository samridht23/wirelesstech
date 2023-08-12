import { styled } from "styled-components"
import data from "@/data/newArrivals.json"
import ProductCard from "@/components/ProductCard"

const PopularProductContainer = styled.div`
  max-width:var(--2xl);
  margin:auto;
  padding:2rem 1rem;
  box-sizing:border-box;
  width:100%;
`
const ProductCardCatalog = styled.div`
  width:100%;
  gap:1rem;
  display:flex;
  justify-content:center;
`
const PopularProductHeader = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`

const PopularProductHeading = styled.div`
  font-size:28px;
  padding:1rem;
  font-weight:bold;
  font-family:SpaceGrotesk;

`
const PopularProduct = () => {
  return (
    <PopularProductContainer>
      <PopularProductHeader>
        <PopularProductHeading>
          NEW ARRIVALS
        </PopularProductHeading>
      </PopularProductHeader>
      <ProductCardCatalog>
        {data.map((data, key) => (
          <div key={key}>
            <ProductCard name={data.name} thumbnail_image={data.thumb_img} category={data.category} />
          </div>
        ))}
      </ProductCardCatalog>
    </PopularProductContainer>
  )
}
export default PopularProduct;
