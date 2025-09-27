import React, {useState, useEffect} from "react"
import { useCart } from "../../hooks/CartContext.jsx"
import {Container} from "./styles.jsx"
import {Button} from "../index.js"
import {formatCurrency} from "../../utils/formatCurrency.js"

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)
  const {cartProducts} = useCart()

  useEffect(() => {
    
    const SumAllItems = cartProducts.reduce((accumulator, current) => {
      return current.price * current.quantity + accumulator
    }, 0)
    setFinalPrice(SumAllItems)
  }, [cartProducts, deliveryTax])
  
  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button style={{width: "100%", marginTop: "30px"}}>
        Finalizar Pedido
      </Button>
    </div>
  )
}
