import React from "react"
import ReactDOM from "react-dom/client"
import { ToastContainer, toast } from "react-toastify"

import Login from "./containers/Login/index"
import GlobalStyles from "./styles/globalStyles"
import { UserProvider } from "./hooks/UserContext"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <>
  <UserProvider>
  <Login />
  </UserProvider>
    <ToastContainer
      autoClose={2500}
      position="bottom-left"
      theme="colored"
      closeOnClick
    />
    <GlobalStyles />
  </>
)
