import React from "react"
import HomeLogo from "../../assets/home-logo.svg"
import CategoryCarousel from "../../components/CategoryCarousel/index"

import {Container, HomeImg} from "./styles.jsx"

export default function Home() {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="Logo do Home" />
      <CategoryCarousel />
    </Container>
  )
}
