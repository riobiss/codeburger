import { Container, ItemContainer, ListLinks } from "./styles.jsx"
import LogoutIcon from "@mui/icons-material/Logout"
import { useUser } from "../../hooks/UserContext.jsx"

import listLinks from "./menu-list.js"
export default function SideMenuAdmin() {
  const { logout } = useUser()
  return (
    <Container>
      <hr />
      {listLinks.map((item) => (
        <ItemContainer key={item.id} $isActive={true}>
          <item.icon className="icon" />
          <ListLinks to={item.link}>{item.label}</ListLinks>
        </ItemContainer>
      ))}
      <ItemContainer style={{ position: "absolute", bottom: "30px" }}>
        <LogoutIcon style={{ color: "white" }} />
        <ListLinks to="/login" onClick={logout}>
          Sair
        </ListLinks>
      </ItemContainer>
      <hr />
    </Container>
  )
}
