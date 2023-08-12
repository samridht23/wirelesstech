import Head from 'next/head'
import HeroBanner from "@/components/HeroBanner"
import Catalog from "@/components/Catalog"
import PopularProduct from "@/components/PopularProduct"
import Offer from "@/components/Offer"
import NewProduct from "@/components/NewProduct"

export default function Home() {
  return (
    <>
      <Head>
        <title>Wireless Tech</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroBanner />
        <Catalog />
        <PopularProduct />
        <Offer />
        <NewProduct />
      </main>
    </>
  )
}