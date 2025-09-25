import React from "react"
import {Routes, Route, BrowserRouter as Router} from "react-router-dom"

import {Home, Login, Products, Register} from "../containers/index.js"
import PrivateRoute from "./private-route.jsx"

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/produtos"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
}
