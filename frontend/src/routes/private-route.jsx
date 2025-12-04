import React from "react"
import { Route, Navigate } from "react-router-dom"
import { Header } from "../components"

export default function PrivateRoute({ children, isAdmin }) {
  const user = localStorage.getItem("codeburguer:userData")
  if (!user) {
    return <Navigate to="/login" />
  }
  if (isAdmin && !JSON.parse(user).admin) {
    return <Navigate to="/" />
  }
  return (
    <>
      {!isAdmin && <Header />}
      {children}
    </>
  )
}
