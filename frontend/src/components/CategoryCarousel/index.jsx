import { useEffect, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
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
        const { data } = await api.get("categories")
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
        slides: { origin: "center", perView: 1.5, spacing: 5 },
      },
      "(min-width: 400px)": {
        slides: { origin: "center", perView: 2.5, spacing: 10 },
      },
      "(min-width: 600px)": {
        slides: { origin: "center", perView: 3.5, spacing: 20 },
      },
      "(min-width: 900px)": {
        slides: { origin: "center", perView: 3.5, spacing: 40 },
      },
      "(min-width: 1300px)": {
        slides: { origin: "center", perView: 4.5, spacing: 50 },
      },
    },
    loop: true,
    mode: "snap",
    updated: categories.length > 0,
  })

  return (
    <Container>
      <CategoryImg src={CategoryLogo} alt="Logo das Categorias" />
      <Carousel ref={sliderRef} className="keen-slider">
        {categories.map((category) => {
          return (
            <ContainerItems className="keen-slider__slide" key={category.id}>
              <Image
                src={category.url}
                alt={"Imagem da categoria de " + category.name}
              />
              <Button to="/produtos" state={{ categoryId: category.id }}>
                {category.name}
              </Button>
            </ContainerItems>
          )
        })}
      </Carousel>
    </Container>
  )
}
