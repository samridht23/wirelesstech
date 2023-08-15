import data from "../../../data/data.json"
import Image from "next/image"
import { useRouter } from 'next/router'
import { useEffect, useState } from "react"
import ProductCard from "@/components/ProductCard"
import Link from "next/link"

interface ProductDesc {
  display?: string;
  processor?: string;
  os?: string;
  selfie_camera?: string;
  main_camera?: string;
  ram?: string;
  storage?: string;
  battery?: string;
}

interface Product {
  id: number;
  name: string;
  category: string[];
  brand: string;
  image: string;
  thumb_img: string;
  desc?: ProductDesc;
  product_name: string;
  product_value: string;
}

const ProductPage = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const [product, setProduct] = useState<Product | null>(null);
  const [productCategory, setProductCategory] = useState<string[]>();
  const [recommendation, setRecommendation] = useState<Product[] | null>(null);
  useEffect(() => {
    const foundProduct = data.find((item) => item.product_value === slug);
    if (foundProduct) {
      setProduct(foundProduct);
      setProductCategory(foundProduct.category)
      const relatedProduct = data.filter(product =>
        product.category.some(category => productCategory?.includes(category))
      );
      const shuffledrelatedProducts = relatedProduct
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        .slice(0, 4)
      setRecommendation(shuffledrelatedProducts)
    }
  }, [slug, product]);
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div className="pt-4 max-w-[1236px] m-auto">
      <section className="py-12 sm:py-16">
        <div className="mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full flex items-center justify-center">
              <div className="max-w-xl overflow-hidden rounded-md border border-[#d1d5db]">
                <Image
                  src={product.image}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="Product Image"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
            <div className="w-full">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{product.name}</h1>
              <div className="w-full mt-10 flex-col flex items-start justify-start space-y-4 border-t border-b py-4 border-[#d1d5db]">
                <div>
                  <div className="font-bold">Category</div>
                  <div className="flex felx-wrap w-full gap-2 py-4">
                    {product.category.map((data, key) => (
                      <div key={key} className="text-sm border border-[#d1d5db] px-4 rounded-full text-[#6b7280] flex justify-center items-center">{data}</div>
                    ))}
                  </div>
                </div>
                <div>
                  {
                    product.desc ?
                      <div className="w-full">
                        <div className="font-bold w-full pb-4">Description</div>
                        <div className="text-sm text-[#222]">
                          <div className="font-bold">Display: <span className="font-normal px-1">{product.desc.display}</span></div>
                          <div className="font-bold">Processor: <span className="font-normal px-1">{product.desc.processor}</span></div>
                          <div className="font-bold">OS: <span className="font-normal px-1">{product.desc.os}</span></div>
                          <div className="font-bold">Selfie Camera: <span className="font-normal px-1">{product.desc.selfie_camera}</span></div>
                          <div className="font-bold">Main Camera: <span className="font-normal px-1">{product.desc.main_camera}</span></div>
                          <div className="font-bold">RAM: <span className="font-normal px-1">{product.desc.ram}</span></div>
                          <div className="font-bold">Storage: <span className="font-normal px-1">{product.desc.storage}</span></div>
                          <div className="font-bold">Battery Capacity: <span className="font-normal px-1">{product.desc.battery}</span></div>
                        </div>
                      </div>
                      :
                      <></>
                  }
                </div>
                <button type="button" className="flex items-center justify-center bg-[#222] px-12 py-3 text-center text-base bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-[#101010]">
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="w-full mt-12">
            <div className="border-b border-gray-300">
              <nav className="flex gap-4">
                <div className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"> Related Products</div>
              </nav>
            </div>
            <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-2">
              {recommendation?.map((data, key) => (
                <Link key={key} href={`/products/${data.product_value}`}>
                  <ProductCard name={data.name} thumbnail_image={data.thumb_img} category={data.category} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ProductPage
