import { styled } from "styled-components"
import Image from "next/image"

const NewProductContainer = styled.div`
  max-width:var(--2xl);
  margin:auto;
  padding:6rem 0;
  background-color:red;
  width:100%;
  box-sizing:border-box;
`
const NewProductImageContainer = styled.div`
  width:100%;
  height:100%;
`
const NewProductImage = styled.img`
  width:100%;
  object-fit:cover;
`
const NewProductOverlay = styled.div`
  width:100%;
  height:100%;
`
const NewProduct = () => {
  return (
    <NewProductContainer>
      <NewProductImageContainer>
        <NewProductImage src="/img/bodyBackground.jpg" alt="New Product Banner"/>
      </NewProductImageContainer>
      <NewProductOverlay>hi</NewProductOverlay>
    </NewProductContainer>
  )
}
export default NewProduct
