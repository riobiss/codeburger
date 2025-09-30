import React from "react"
import HomeLogo from "../../assets/home-logo.svg"
import {CategoryCarousel, OfferCarousel, Header} from "../../components/index.js"
import {Container, HomeImg} from "./styles.jsx"

export function Home() {
  return (
    <Container>
     <Header/>
      <HomeImg src={HomeLogo} alt="Logo do Home" />
      <CategoryCarousel />
      <OfferCarousel/>
    </Container>
  )
}
