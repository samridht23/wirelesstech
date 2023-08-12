import { styled } from "styled-components"
import data from "@/data/data.json"
import ProductCard from "@/components/ProductCard"
import { useState, useMemo, useEffect } from "react"
import * as RadioGroup from "@radix-ui/react-radio-group"
import { CheckIcon } from "lucide-react"

const ProductContainer = styled.div`
  display:flex;
  width:100%;
  padding:3rem 1rem;
  box-sizing:border-box;
  gap:2rem;
  margin:auto;
  max-width:var(--2xl);
`
const ProductPageLeft = styled.div`
  width:360px;
  box-sizing:border-box;
  @media (max-width:968px){
    display:none;
  }
`
const ProductPageRight = styled.div`
  width:100%;
  display:flex;
  flex-wrap:wrap;
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(240px,1fr));
  gap:1rem;
`
const Test = styled.div`
`
const ProductPageLeftHeading = styled.div`
  font-size:16px;
  font-weight:bold;
  border-bottom:1px solid;
  border-color:var(--border);
  padding:0.5rem 0rem;
  font-family:SpaceGrotesk;
`
const CategorySelection = styled.div`
  display:flex;
  gap:0 1rem;
  width:100%;
  label{
    font-size:12px;
  }
`
const CategoryForm = styled.form`
  padding:1rem 0;
  display:flex;
  width:100%;
`
const RadioGroupRoot = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const RadioGroupItem = styled(RadioGroup.Item)`
  border:2px solid;
  border-color:#222;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:border-color 0.2s ease-out;
  overflow:hidden;
  &:hover{
    border-color:var(--accent);
  }
`
const RadioGroupIndicator = styled(RadioGroup.Indicator)`
  display:flex;
  background-color:#222;
  &:hover{
    background-color:var(--accent);
  }
`
const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const products = useMemo(() => {
    if (selectedCategory === '') {
      return data;
    } else {
      return data.filter(product => product.category.includes(selectedCategory));
    }
  }, [selectedCategory, data]);
  return (
    <ProductContainer>
      <ProductPageLeft>
        <ProductPageLeftHeading>
          CATEGORY
        </ProductPageLeftHeading>
        <CategoryForm>
          <RadioGroupRoot onValueChange={(value) => { setSelectedCategory(value) }}>
            <CategorySelection>
              <RadioGroupItem value="accessories">
                <RadioGroupIndicator>
                  <CheckIcon color="#FFFFFF" size={16} />
                </RadioGroupIndicator>
              </RadioGroupItem>
              <label>
                Accessories
              </label>
            </CategorySelection>
            <CategorySelection>
              <RadioGroupItem value="amazon">
                <RadioGroupIndicator>
                  <CheckIcon color="#FFFFFF" size={16} />
                </RadioGroupIndicator>
              </RadioGroupItem>
              <label>
                Amazon
              </label>
            </CategorySelection>
            <CategorySelection>
              <RadioGroupItem value="apple">
                <RadioGroupIndicator>
                  <CheckIcon color="#FFFFFF" size={16} />
                </RadioGroupIndicator>
              </RadioGroupItem>
              <label>
                Apple
              </label>
            </CategorySelection>
            <CategorySelection>
              <RadioGroupItem value="apple_watch">
                <RadioGroupIndicator>
                  <CheckIcon color="#FFFFFF" size={16} />
                </RadioGroupIndicator>
              </RadioGroupItem>
              <label>
                Apple Watch
              </label>
            </CategorySelection>
            <CategorySelection>
              <RadioGroupItem value="ipad">
                <RadioGroupIndicator>
                  <CheckIcon color="#FFFFFF" size={16} />
                </RadioGroupIndicator>
              </RadioGroupItem>
              <label>
                iPad
              </label>
            </CategorySelection>
            <CategorySelection>
              <RadioGroupItem value="iphone">
                <RadioGroupIndicator>
                  <CheckIcon color="#FFFFFF" size={16} />
                </RadioGroupIndicator>
              </RadioGroupItem>
              <label>
                iPhone
              </label>
            </CategorySelection>
            <CategorySelection>
              <RadioGroupItem value="samsung">
                <RadioGroupIndicator>
                  <CheckIcon color="#FFFFFF" size={16} />
                </RadioGroupIndicator>
              </RadioGroupItem>
              <label>
                Samsung
              </label>
            </CategorySelection>
          </RadioGroupRoot>
        </CategoryForm>
      </ProductPageLeft>
      <ProductPageRight>
        {products.map((data, key) => (
          <Test key={key}>
            <ProductCard name={data.name} thumbnail_image={data.thumb_img} category={data.category} />
          </Test>))}
      </ProductPageRight>
    </ProductContainer >
  )
}
export default Product;
