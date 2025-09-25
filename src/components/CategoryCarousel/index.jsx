import React, {useEffect, useState} from "react"
import {useKeenSlider} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import CategoryLogo from "../../assets/categories-img.svg"
import {
  Container,
  CategoryImg,
  ContainerItems,
  Image,
  Carousel,
  Button,
} from "./styles.jsx"
import api from "../../services/api.js"

export function CategoryCarousel() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    try {
      async function LoadCategories() {
        const {data} = await api.get("categories")
        setCategories(data)
      }

      LoadCategories()
    } catch (err) {
      return console.log(err)
    }
  }, [])

  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 1px)": {
        slides: {perView: 1, spacing: 5},
      },
      "(min-width: 400px)": {
        slides: {perView: 2, spacing: 10},
      },
      "(min-width: 600px)": {
        slides: {perView: 3, spacing: 20},
      },
      "(min-width: 900px)": {
        slides: {perView: 4, spacing: 40},
      },
      "(min-width: 1300px)": {
        slides: {perView: 5, spacing: 50},
      },
    },
    slides: {perView: 2},
  })

  return (
    <Container>
      <CategoryImg src={CategoryLogo} alt="Logo das Categorias" />
      <Carousel ref={sliderRef} className="keen-slider">
        {categories.map(category => {
          return (
            <ContainerItems className="keen-slider__slide" key={category.id}>
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
