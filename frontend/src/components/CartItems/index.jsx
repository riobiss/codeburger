import {useCart} from "../../hooks/CartContext.jsx"
import {Container, Header, Body, EmptyCart} from "./styles.jsx"
import formatCurrency from "../../utils/formatCurrency.js"
export function CartItems() {
  const {cartProducts,increaseProducts, decreaseProducts} = useCart()
  return (
    <Container>
      <Header>
        <p>Itens</p>
          <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
      </Header>

      { cartProducts.length > 0 ? 
      cartProducts.map(product => {
        return (
          <Body key={product.id}>
            <img src={product.url} alt={product.name} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div className="quantity-container">
              <button onClick={()=> decreaseProducts(product.id)}>-</button>
            <p>{product.quantity}</p>
              <button onClick={()=> increaseProducts(product.id)}>+</button>
            </div>
            <p>{formatCurrency(product.quantity * product.price)}</p>
          </Body>
        )
      })
      : (
      <EmptyCart>
           <p>Carinho vazio</p>
      </EmptyCart>
      )

    }
    </Container>
  )
}
