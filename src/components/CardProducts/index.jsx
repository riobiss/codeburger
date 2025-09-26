import React from "react"

import {Container, Image, ProductName, ProductPrice} from "./styles"
import {Button} from "../index.js"
import {useCart} from "../../hooks/CartContext.jsx"

export function CardProducts({product}) {
  const {putProductInCart} = useCart()
  return (
    <Container>
      <Image src={product.url} />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button onClick={()=> putProductInCart(product)} >Adicionar</Button>
      </div>
    </Container>
  )
}
