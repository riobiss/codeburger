import React, {useEffect, useState} from "react"
import {useKeenSlider} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import OfferLogo from "../../assets/offers.svg"
import { formatCurrency } from "../../utils/formatCurrency.js"
import {
  Container,
  OfferImg,
  ContainerItems,
  Image,
  Carousel,
  Button,
} from "./styles.jsx"
import api from "../../services/api.js"

export function OfferCarousel() {
  const [offers, setOffers] = useState([])

  useEffect(() => {
    try {
      async function LoadOffers() {
        const {data} = await api.get("products")

        const onlyOffers = data.filter(product => product.offer)
        setOffers(onlyOffers)
      }

      LoadOffers()
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
      <OfferImg src={OfferLogo} alt="Logo das Ofertas" />
      <Carousel ref={sliderRef} className="keen-slider">
        {offers.map(product => {
          return (
            <ContainerItems className="keen-slider__slide" key={product.id}>
              <Image
                src={product.url}
                alt={"Imagem da " + product.name + " em oferta"}
              />
              <p>{product.name}</p>
              <p>{product.price}</p>
              <Button>Peça agora</Button>
            </ContainerItems>
          )
        })}
      </Carousel>
    </Container>
  )
}
