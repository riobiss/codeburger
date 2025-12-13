import { useEffect, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useCart } from "../../hooks/CartContext.jsx"
import OfferLogo from "../../assets/offers.svg"
import formatCurrency from "../../utils/formatCurrency.js"
import { useNavigate } from "react-router-dom"

import {
  Container,
  OfferImg,
  ContainerItems,
  Image,
  Carousel,
  Button,
} from "./styles.jsx"
import api from "../../services/api.js"
import paths from "../../constants/paths.js"

export function OfferCarousel() {
  const [offers, setOffers] = useState([])
  const { putProductInCart } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    try {
      async function LoadOffers() {
        const { data } = await api.get("products")

        const onlyOffers = data
          .filter((product) => product.offer)
          .map((item) => {
            return { ...item, formatedPrice: formatCurrency(item.price) }
          })
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
        slides: { origin: "center", perView: 4, spacing: 50 },
      },
    },
    loop: true,
    mode: "snap",
    range: {
      min: -offers.length,
      max: offers.length,
    },
  })

  return (
    <Container>
      <OfferImg src={OfferLogo} alt="Logo das Ofertas" />
      <Carousel ref={sliderRef} className="keen-slider">
        {offers.map((product) => {
          return (
            <ContainerItems className="keen-slider__slide" key={product.id}>
              <Image
                src={product.url}
                alt={"Imagem da " + product.name + " em oferta"}
              />
              <p>{product.name}</p>
              <p>{/* formatCurrency(product.price) */ product.formatedPrice}</p>
              <Button
                onClick={() => {
                  putProductInCart(product)
                  navigate(paths.Cart)
                }}
              >
                Peça agora
              </Button>
            </ContainerItems>
          )
        })}
      </Carousel>
    </Container>
  )
}
