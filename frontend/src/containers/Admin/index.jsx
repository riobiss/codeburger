import { Container, ContainerItems } from "./styles"
import SideMenuAdmin from "../../components/SideMenuAdmin"
import ListProducts from "./ListProducts"
import Order from "./Orders"
import { useLocation } from "react-router-dom"
import paths from "../../constants/paths"
export function Admin() {
  const location = useLocation().pathname
  return (
    <Container>
      <SideMenuAdmin path={location} />
      <ContainerItems>
        {location === paths.Order && <Order/>}
        {location === paths.ListProducts && <ListProducts/>}
      </ContainerItems>
    </Container>
  )
}
