import React from "react"
import {UserProvider} from "./UserContext"
import {CartProvider} from "./CartContext"

const AppProvider = ({children}) => {
  return (
    <CartProvider>
      <UserProvider>{children}</UserProvider>
    </CartProvider>
  )
}

export default AppProvider
