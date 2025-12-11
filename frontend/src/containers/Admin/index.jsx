import { Container, ContainerItems } from "./styles"
import SideMenuAdmin from "../../components/SideMenuAdmin"
import ListProducts from "./ListProducts"
import Order from "./Orders"
export function Admin() {
  return (
    <Container>
      <SideMenuAdmin />
      <ContainerItems>
    {/*   <Order /> */}
      <ListProducts />
      </ContainerItems>
    </Container>
  )
}
