import * as React from "react"
import PropTypes from "prop-types"
import Box from "@mui/material/Box"
import Collapse from "@mui/material/Collapse"
import IconButton from "@mui/material/IconButton"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { useEffect, useState } from "react"
import api from "../../../services/api.js"
import { Container } from "./styles"
import Row from "./row.jsx"
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
      date: order.createdAt,
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
              <TableCell>Data</TableCell>
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
