import {Container, Image, ProductName, ProductPrice} from "./styles"
import {Button} from "../index.js"
import {useCart} from "../../hooks/CartContext.jsx"
import {useNavigate} from "react-router-dom"
import paths from "../../constants/paths.js"

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
            navigate(paths.Cart)
          }}
        >
          Adicionar
        </Button>
      </div>
    </Container>
  )
}
