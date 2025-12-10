import { Container, ItemContainer, ListLinks } from "./styles.jsx"
import listLinks from "./menu-list.js"
export function SideMenuAdmin() {
  return (
    <Container>
      <hr />
      {console.log(listLinks)}
      {listLinks.map((item) => {
        return (
          <ItemContainer key={item.id}>
            <item.icon className="icon"/>
            <ListLinks to={item.link}>{item.label}</ListLinks>
          </ItemContainer>
        )
      })}
      <hr />
    </Container>
  )
}
