import { Container } from "./styles"
import { SideMenuAdmin } from "../../components"
import Order from "./Orders"
export function Admin() {
  return (
    <Container>
      <SideMenuAdmin/>
      <Order />
    </Container>
  )
}
