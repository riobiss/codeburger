import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { useEffect, useState } from "react"
import api from "../../../services/api.js"
import { Container, Menu, LinkMenu } from "./styles"
import Row from "./row.jsx"
import { formatDate } from "../../../utils/formatDate.js"
import status from "./ordersStatus.js"
export default function Order() {
  const [orders, setOrders] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeStatus, setActiveStatus] = useState([])

  const [rows, setRows] = useState([])

  useEffect(() => {
    async function LoadOrders() {
      const { data } = await api.get("orders")

      setOrders(data)
      setFiltered(data)
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
    const newRows = filtered.map((ord) => createData(ord))
    setRows(newRows)
  }, [filtered])

  useEffect(() => {
    if (activeStatus === 1) {
      setFiltered(orders)
      return
    } else {
      const statusIndex = status.findIndex(
        (status) => status.id === activeStatus
      )
      if (statusIndex === -1) return
      const newFilteredOrders = orders.filter(
        (order) => order.status === status[statusIndex].value
      )
      setFiltered(newFilteredOrders)
    }
  }, [orders, activeStatus])

  function handleStatus(status) {
    if (status.id === 1) {
      setFiltered(orders)
    } else {
      const newOrders = orders.filter((item) => item.status === status.value)
      setFiltered(newOrders)
    }
    setActiveStatus(status.id)
  }

  return (
    <Container>
      <Menu>
        {status?.map((status) => (
          <LinkMenu
            onClick={() => handleStatus(status)}
            $isActiveStatus={activeStatus === status.id}
            key={status.id}
          >
            {status.label}
          </LinkMenu>
        ))}
      </Menu>
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
              <Row
                key={row.orderId}
                row={row}
                setOrders={setOrders}
                orders={orders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
