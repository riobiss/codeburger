import * as React from "react"
import Box from "@mui/material/Box"
import Collapse from "@mui/material/Collapse"
import IconButton from "@mui/material/IconButton"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Typography from "@mui/material/Typography"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { ProductsImg, ReactSelectStyle } from "./styles"
import api from "../../../services/api"
import status from "./ordersStatus"

export default function Row({ row }) {
  const [open, setOpen] = React.useState(false)
  const [isLoanding, setisLoading] = React.useState(false)

  async function setStatus(id, status) {
    setisLoading(true)
    try {
      await api.put(`orders/${id}`, { status })
    } catch (err) {
      console.error(err)
    } finally {
      setisLoading(false)
    }
  }

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.orderId}
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.date}</TableCell>
        <TableCell>
          <ReactSelectStyle
            options={status.filter(status => status.id > 1)}
            menuPortalTarget={document.body}
            placeholder="Status"
            defaultValue={
              status.find((item) => item.value === row.status) || null
            }
            onChange={(item) => {
              setStatus(row.orderId, item.value)
            }}
            isLoading={isLoanding}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Pedido
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Quantidade</TableCell>
                    <TableCell>Produto</TableCell>
                    <TableCell>Categoria</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map((productsRow) => (
                    <TableRow key={productsRow.id}>
                      <TableCell component="th" scope="row">
                        {productsRow.quantity}
                      </TableCell>
                      <TableCell>{productsRow.name}</TableCell>
                      <TableCell>{productsRow.category}</TableCell>
                      <TableCell>
                        <ProductsImg
                          src={productsRow.url}
                          alt={`Imagem do produto ${productsRow.name}`}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}
