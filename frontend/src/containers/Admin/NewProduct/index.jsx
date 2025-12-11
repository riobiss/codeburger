import { Container } from "./styles.jsx"
import api from "../../../services/api.js"
import { useEffect } from "react"
export default function ListProducts() {
  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get("products")
    }
    loadOrders()
  }, [])
  return (<Container> ok</Container>)
}
