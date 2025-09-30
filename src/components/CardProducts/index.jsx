import React from "react"

import {Container, Image, ProductName, ProductPrice} from "./styles"
import {Button} from "../index.js"
import {useCart} from "../../hooks/CartContext.jsx"
import {useNavigate} from "react-router-dom"

export function CardProducts({product}) {
  const navigate = useNavigate()
  const {putProductInCart} = useCart()
  return (
    <Container>
      <Image src={product.url} />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button
          onClick={() => {
            putProductInCart(product)
            navigate("/carrinho")
          }}
        >
          Adicionar
        </Button>
      </div>
    </Container>
  )
}
