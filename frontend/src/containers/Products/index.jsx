import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import api from "../../services/api.js"
import ProductsLogo from "../../assets/products-logo.svg"
import {
  Container,
  ProductImg,
  CategoryButton,
  CategoriesMenu,
  ProductsContainer,
} from "./styles.jsx"
import { CardProducts } from "../../components/index.js"
import { formatCurrency } from "../../utils/formatCurrency.js"

export function Products() {
  const { state } = useLocation()
  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)

  useEffect(() => {
    async function LoadCategories() {
      const { data } = await api.get("categories")

      const newCategories = [{ id: 0, name: "Todos" }, ...data]
      setCategories(newCategories)
    }

    async function LoadProducts() {
      const { data } = await api.get("products")

      const newAllproducts = data.map((product) => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(newAllproducts)
    }
    LoadCategories()
    LoadProducts()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.category_id === activeCategory
      )

      setFilteredProducts(newFilteredProducts)
    }
  }, [activeCategory, products])

  return (
    <Container>
      <ProductImg src={ProductsLogo} alt="Logo do Home" />
      <CategoriesMenu>
        {categories &&
          categories.map((category) => {
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
        {filteredProducts.map((product) => {
          return <CardProducts key={product.id} product={product} />
        })}
      </ProductsContainer>
    </Container>
  )
}
