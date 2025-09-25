import React from "react"
import ReactDOM from "react-dom/client"
import { ToastContainer, toast } from "react-toastify"

import AppRoutes from "./routes/routes"
import GlobalStyles from "./styles/globalStyles"
import AppProvider  from "./hooks/index"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <>
  <AppProvider>
  <AppRoutes />
  </AppProvider>
    <ToastContainer
      autoClose={2500}
      position="bottom-left"
      theme="colored"
      closeOnClick
    />
    <GlobalStyles />
  </>
)
