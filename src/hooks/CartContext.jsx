import React, {createContext, useContext, useEffect, useState} from "react"

const CartContext = createContext({})

export const CartProvider = ({children}) => {
  const [cartProducts, setCartProducts] = useState([])

  const putProductInCart = async product => {
    const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

    let newCartProducts = []
    if (cartIndex >= 0) {
      newCartProducts = cartProducts

      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 1
      setCartProducts(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cartProducts, product]
      setCartProducts(newCartProducts)
    }
    await localStorage.setItem(
      "codeburguer:cartInfo",
      JSON.stringify(newCartProducts)
    )
  }

  const increaseProducts = async ProductId => {
    const newCart = cartProducts.map(product => {
      return product.id === ProductId
        ? {...product, quantity: product.quantity + 1}
        : product
    })

    setCartProducts(newCart)
    await localStorage.setItem("codeburguer:cartInfo", JSON.stringify(newCart))
  }

  const decreaseProducts = async  ProductId =>{
    const cartIndex = cartProducts.findIndex(pd => pd.id === ProductId)
    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map(product => {
        return product.id === ProductId
          ? {...product, quantity: product.quantity - 1}
          : product
      })

      setCartProducts(newCart)
      await localStorage.setItem(
        "codeburguer:cartInfo",
        JSON.stringify(newCart)
      )
    }
  }
  useEffect(() => {
    const loadCartData = async () => {
      const clientCartData = await localStorage.getItem("codeburguer:cartInfo")

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData))
      }
    }

    loadCartData()
  }, [])

  return (
    <CartContext.Provider
      value={{putProductInCart, cartProducts, increaseProducts, decreaseProducts}}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error("useCart must be used with CartContext")
  }

  return context
}
