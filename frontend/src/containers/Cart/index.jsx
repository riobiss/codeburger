import CartLogo from "../../assets/cart-img.svg"
import {CartItems, CartResume} from '../../components/index.js'
import {Container, CartImg, Wrapper} from "./styles.jsx"


export function Cart() {
  return (
    <Container>
      <CartImg src={CartLogo} alt="Logo do Carinho" />
      <Wrapper>
      <CartItems/>
      <CartResume/>
      </Wrapper>
    </Container>
  )
}
