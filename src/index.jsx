import React from "react"
import ReactDOM from "react-dom/client"
import { ToastContainer, toast } from "react-toastify"

import Login from "./containers/Login/index"
import GlobalStyles from "./styles/globalStyles"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <>
    <Login />
    <ToastContainer
      autoClose={2500}
      position="bottom-left"
      theme="colored"
      closeOnClick
    />
    <GlobalStyles />
  </>
)
