import React from "react"
import Cart from "../../assets/cart.svg"
import Person from "../../assets/person.svg"

import {Container, ContainerLeft, ContainerRight, PageLink, PageLinkExit, ContainerText, Line} from "./styles.jsx"

export function Header() {
  return (
    <Container>
      <ContainerLeft>
        <PageLink>Home</PageLink>
        <PageLink>Ver Produtos</PageLink>
      </ContainerLeft>
      <ContainerRight>
        <PageLink>
          <img className="Cart" src={Cart} alt="Carrinho" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img className="person" src={Person} alt="Conta do usuario" />
        </PageLink>
        <ContainerText>
        <p>Ola, Riobis</p>
        <PageLinkExit>Sair</PageLinkExit>
      </ContainerText>
      </ContainerRight>

    </Container>
  )
}
