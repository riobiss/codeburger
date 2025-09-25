import React from "react"
import ProductsLogo from "../../assets/products-logo.svg"
import {Container, ProductImg} from "./styles.jsx"

export default function Products() {
  return (
    <Container>
      <ProductImg src={ProductsLogo} alt="Logo do Home" />
    </Container>
  )
}
