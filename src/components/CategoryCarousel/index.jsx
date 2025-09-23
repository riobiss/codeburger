import React, {useEffect} from "react"

import CategoryLogo from "../../assets/categories-img.svg"
import {Container, CategoryImg} from "./styles"
import api from "../../services/api"

export default function Home() {
  useEffect(() => {
    async function LoadCategories() {
      const response = await api.get("categories")
      console.log(response)
    }

    LoadCategories()
  }, [])

  return (
    <Container>
      <CategoryImg src={CategoryLogo} alt="Logo do Home" />
    </Container>
  )
}
