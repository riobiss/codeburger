import React from "react"
import {Routes, Route, BrowserRouter as Router} from "react-router-dom"

import Login from "../containers/Login/index.jsx"
import Register from "../containers/register/index.jsx"
import Home from "../containers/Home/index.jsx"
import PrivateRoute from "./private-route.jsx"
import Products from "../containers/Products/index.jsx"

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
