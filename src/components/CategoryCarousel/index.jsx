import React, {useEffect, useState} from "react"
import Carousel from "react-elastic-carousel"
import CategoryLogo from "../../assets/categories-img.svg"
import {Container, CategoryImg,ContainerItems, Image, Button} from "./styles.jsx"
import api from "../../services/api"

export default function Home() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function LoadCategories() {
      const {data} = await api.get("categories")
      setCategories(data)
    }

    LoadCategories()
  }, [])
  const breakPoints = [
    {witdh: 1, itemsToShow: 1},
    {width: 400, itemsToShow: 2},
    {width: 600, itemsToShow: 3},
    {width: 900, itemsToShow: 4},
    {width: 1300, itemsToShow: 5},
  ]

  return (
    <Container>
      <CategoryImg src={CategoryLogo} alt="Logo do Home" />
      <Carousel itemsToShow={4} style={{width: "90%"}} breakPoints={breakPoints}>
        {categories.map(category => {
          return (
            <ContainerItems key={category.id}>
              <Image
                src={category.url}
                alt={"Imagem da categoria de " + category.name}
              />
              <Button>{category.name}</Button>
            </ContainerItems>
          )
        })}
      </Carousel>
    </Container>
  )
}
