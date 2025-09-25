import React, {useState, useEffect} from "react"

import api from "../../services/api.js"
import ProductsLogo from "../../assets/products-logo.svg"
import {
  Container,
  ProductImg,
  CategoryButton,
  CategoriesMenu,
  ProductsContainer,
} from "./styles.jsx"
import CardProducts from "../../components/CardProducts/index.jsx"
import { formatCurrency } from "../../utils/formatCurrency.js"

export default function Products() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    async function LoadCategories() {
      const {data} = await api.get("categories")

      const newCategories = [{id: 0, name: "Todos"}, ...data]
      setCategories(newCategories)
    }

    async function LoadProducts() {
      const {data} = await api.get("products")

      const newAllproducts = data.map(product => {
        return {...product, formatedPrice: formatCurrency(product.price)}
      })

      setProducts(newAllproducts)
    }
    LoadCategories()
    LoadProducts()
  }, [])

  return (
    <Container>
      <ProductImg src={ProductsLogo} alt="Logo do Home" />
      <CategoriesMenu>
        {categories &&
          categories.map(category => {
            return (
              <CategoryButton
                key={category.id}
                $isActiveCategory={activeCategory === category.id}
                type="button"
                onClick={() => {
                  setActiveCategory(category.id)
                }}
              >
                {category.name}
              </CategoryButton>
            )
          })}
      </CategoriesMenu>
      <ProductsContainer>
        {products.map(product => {
          return <CardProducts key={product.id} product={product} />
        })}
      </ProductsContainer>
    </Container>
  )
}
