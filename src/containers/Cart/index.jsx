import React from "react"
import CartLogo from "../../assets/cart-img.svg"
import {CartItems} from '../../components/index.js'
import {Container, CartImg} from "./styles.jsx"


export function Cart() {
  return (
    <Container>
      <CartImg src={CartLogo} alt="Logo do Carinho" />
      <CartItems/>
    </Container>
  )
}
