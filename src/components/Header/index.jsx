import React from "react"
import Cart from "../../assets/cart.svg"
import Person from "../../assets/person.svg"
import { useNavigate, useLocation  } from "react-router-dom"
import {useUser} from "../../hooks/UserContext.jsx"
import {Container, ContainerLeft, ContainerRight, PageLink, PageLinkExit, ContainerText, Line} from "./styles.jsx"

export function Header() {
const navigate = useNavigate()
const  {pathname} = useLocation()
const {name} = JSON.parse(localStorage.getItem("codeburguer:userData"))
const {logout} = useUser()

const logoutUser = () => {
  logout()
  navigate("/login")
}

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={()=> navigate("/")} $isActive={pathname === "/"}>Home</PageLink>
        <PageLink onClick={()=> navigate("/produtos")} $isActive={pathname.includes("produtos")}>Ver Produtos</PageLink>
      </ContainerLeft>
      <ContainerRight>
        <PageLink>
          <img  onClick={()=> navigate("/carrinho")} className="Cart" src={Cart} alt="Carrinho" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img className="person" src={Person} alt="Conta do usuario" />
        </PageLink>
        <ContainerText>
        <p>Olá, {name}</p>
        <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
      </ContainerText>
      </ContainerRight>

    </Container>
  )
}
