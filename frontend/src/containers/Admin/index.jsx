import { Container } from "./styles"
import SideMenuAdmin from "../../components/SideMenuAdmin"
import ListProducts from "./ListProducts"
import Order from "./Orders"
export function Admin() {
  return (
    <Container>
      <SideMenuAdmin />
      <Order />
      <ListProducts />
    </Container>
  )
}
