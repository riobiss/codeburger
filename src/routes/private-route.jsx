import React from "react"
import {Route, Navigate} from "react-router-dom"
import { Header } from "../components"
export default function PrivateRoute({children}) {
  const user = localStorage.getItem("codeburguer:userData")
  if (!user) {
    return <Navigate to="/login" />
  }
  return (
    <>
      <Header />
      {children}
    </>
  )
}
