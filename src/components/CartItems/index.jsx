import React from "react"
import {useCart} from "../../hooks/CartContext.jsx"
import {Container, Header, Body} from "./styles.jsx"
import { formatCurrency } from "../../utils/formatCurrency.js"
export function CartItems() {
  const {cartProducts} = useCart()
  return (
    <Container>
      <Header>
        <p>Itens</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
      </Header>

      {cartProducts.map(product => {
        return (
          <Body key={product.id}>
            <img src={product.url} alt={product.name} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <p>{product.quantity}</p>
            <p>{formatCurrency(product.quantity * product.price)}</p>
          </Body>
        )
      })}
    </Container>
  )
}
