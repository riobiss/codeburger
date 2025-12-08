import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { useEffect, useState } from "react"
import api from "../../../services/api.js"
import { Container } from "./styles"
import Row from "./row.jsx"
import { formatDate } from "../../../utils/formatDate.js"
export default function Order() {
  const [orders, setOrders] = useState([])
  const [rows, setRows] = useState([])

  useEffect(() => {
    async function LoadOrders() {
      const { data } = await api.get("orders")

      setOrders(data)
    }
    LoadOrders()
  }, [])

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: formatDate(order.createdAt),
      status: order.status,
      products: order.products,
    }
  }
  useEffect(() => {
    const newRows = orders.map((ord) => createData(ord))
    setRows(newRows)
  }, [orders])

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>Data do pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.orderId} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
