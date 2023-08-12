import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { styled } from "styled-components"

const BodyContainer = styled.div`
`
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <BodyContainer>
        <Component {...pageProps} />
      </BodyContainer>
      <Footer />
    </>
  )
}
