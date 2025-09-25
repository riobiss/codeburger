import React, {useState, useEffect} from "react"

import api from "../../services/api.js"
import ProductsLogo from "../../assets/products-logo.svg"
import {
  Container,
  ProductImg,
  CategoryButton,
  CategoriesMenu,
} from "./styles.jsx"

export default function Products() {
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    async function LoadCategories() {
      const {data} = await api.get("categories")
      const newCategories = [{id: 0, name: "Todos"}, ...data]
      setCategories(newCategories)
    }

    LoadCategories()
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
    </Container>
  )
}
