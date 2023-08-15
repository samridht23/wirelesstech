import data from "@/data/data.json"
import ProductCard from "@/components/ProductCard"
import { useState, useMemo, useEffect } from "react"
import * as RadioGroup from "@radix-ui/react-radio-group"
import { CheckIcon, SearchIcon, ChevronDownIcon, ChevronsUpIcon } from "lucide-react"
import * as Select from '@radix-ui/react-select';
import Link from "next/link"

const categoryData = [
  {
    value: "",
    name: "All"
  },
  {
    value: "accessories",
    name: "Accessories"
  },
  {
    value: "amazon",
    name: "Amazon"
  },
  {
    value: "apple",
    name: "Apple"
  },
  {
    value: "apple_watch",
    name: "Apple Watch"
  },
  {
    value: "ipad",
    name: "iPad"
  },
  {
    value: "iphone",
    name: "iPhone"
  },
  {
    value: "samsung",
    name: "Samsung"
  }
]
const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSelectedCategory('');
    setSearchTerm(inputValue);
  }

  const products = useMemo(() => {
    if (selectedCategory === '') {
      if (searchTerm === '') {
        return data;
      }
      else {
        return data.filter((product) => {
          const searchFields = product.category
            .map(category => category.toLowerCase())
            .concat(product.name.toLowerCase(), product.brand.toLowerCase())
            .join(' ');
          return searchFields.includes(searchTerm.toLowerCase());
        });
      }
    }
    return data.filter((product) => {
      return product.category.includes(selectedCategory);
    })
  }, [selectedCategory, searchTerm]);
  return (
    <div className="w-full pt-9">
      <div className="flex w-full px-[1rem] lg:pt-[2rem] pb-[7rem] box-border gap-[2rem] m-auto max-w-[1536px]">
        <div className="w-[300px] box-border hidden lg:block">
          <form onSubmit={handleSubmit}>
            <div className="font-[16px] font-bold border-b-[1px] border-[#d1d5db] pb-2" >
              SEARCH
            </div>
            <div className="relative py-4">
              <input
                type="text"
                id="Search"
                placeholder="Search"
                className="w-full border-[1px]  border-[#d1d5db] p-2.5 sm:text-sm box-border outline-none"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                autoComplete="off"
              />
              <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                <button className="text-[#d1d5db] hover:text-gray-700">
                  <SearchIcon />
                </button>
              </span>
            </div>
          </form>
          <div className="font-[16px] font-bold border-b-[1px] border-[#d1d5db] pb-2" >
            CATEGORY
          </div>
          <form className="py-4 flex w-full">
            <RadioGroup.Root className="flex flex-col gap-2" onValueChange={(value) => { setSelectedCategory(value) }}>
              <div className="flex flex-col gap-y-2 w-full">
                {categoryData.map((data, key) => (
                  <div key={key} className="flex justify-start items-center gap-4" >
                    <RadioGroup.Item className="border-[2px] border-[#222] w-[16px] h-[16px] rounded-[2px] flex items-center justify-center overflow-hidden" value={data.value}>
                      <RadioGroup.Indicator className="flex bg-[#222] hover:bg-[#fdcf41]">
                        <CheckIcon color="#FFFFFF" size={16} />
                      </RadioGroup.Indicator>
                    </RadioGroup.Item>
                    <label className="text-sm">
                      {data.name}
                    </label>
                  </div>
                ))}
              </div>
            </RadioGroup.Root>
          </form>
        </div>
        <div className="w-full">
          <div className="w-full lg:hidden pb-2">
            <div>
              <form onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    id="Search"
                    placeholder="Search"
                    className="w-full border-[1px]  border-[#d1d5db] p-2.5 sm:text-sm box-border outline-none"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    autoComplete="off"
                  />
                  <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                    <button className="text-[#d1d5db] hover:text-gray-700">
                      <SearchIcon />
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full lg:hidden pb-2">
            <Select.Root onValueChange={(value) => { setSelectedCategory(value) }}>
              <Select.Trigger
                className="flex items-center justify-between px-[15px] text-base p-2.5 bg-white outline-none border w-full text-gray-400 border-[#d1d5db]"
                aria-label="Category"
              >
                <Select.Value placeholder="Category" />
                <Select.Icon>
                  <ChevronDownIcon className="flex" />
                </Select.Icon>
              </Select.Trigger>
              <Select.Content
                asChild
                className="w-full overflow-hidden relative"
                position='popper'
              >
                <Select.Viewport className="relative w-full border border-[#d1d5db] w-[var(--radix-select-trigger-width)]">
                  {categoryData.map((data, key) => (
                    <Select.Item key={key} value={data.value} className='relative z-50 pl-[30px] outline-none bg-white text-base flex items-center p-3 relative text-[#222]'
                    >
                      <Select.ItemText>{data.name}</Select.ItemText>
                      <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                        <CheckIcon size={20} />
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))}
                </Select.Viewport>
              </Select.Content>
            </Select.Root>
          </div>
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-2 md:grid-cols-3 z-10">
            {products.map((data, key) => (
              <Link key={key} href={`/products/${data.product_value}`}>
                <ProductCard name={data.name} thumbnail_image={data.thumb_img} category={data.category} />
              </Link>))}
          </div>
        </div>
      </div>
    </div >
  )
}
export default Product;
