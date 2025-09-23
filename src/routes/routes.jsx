import React from "react"
import {Routes, Route, BrowserRouter as Router} from "react-router-dom"

import Login from "../containers/Login/index.jsx"
import Register from "../containers/register/index.jsx"

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Login/> } path="/login" />
        <Route element={<Register/>} path="/cadastro" />
      </Routes>
    </Router>
  )
}
