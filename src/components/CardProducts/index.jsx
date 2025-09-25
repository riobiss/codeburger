import React from "react"

import {Container, Image, ProductName, ProductPrice} from "./styles"
import Button from "../Button/index"

export default function CardProducts({product}) {
  return (
    <Container>
      <Image src={product.url} />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{(product.formatedPrice)}</ProductPrice>
        <Button>Adicionar</Button>
      </div>
    </Container>
  )
}
