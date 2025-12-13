import { Container, Img, EditIconStyles } from "./styles.jsx"
import api from "../../../services/api.js"
import { useEffect, useState } from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import CheckBoxIcon from "@mui/icons-material/CheckBox"
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined"
import formatCurrency from "../../../utils/formatCurrency.js"
import { useNavigate } from "react-router-dom"
import paths from "../../../constants/paths.js"

export default function ListProducts() {
  const [products, setProducts] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get("products")
      setProducts(data)
    }
    loadOrders()
  }, [])
  function isOffer(offerStatus) {
    if (offerStatus) {
      return <CheckBoxIcon style={{ color: "green" }} />
    }
    return <CheckBoxOutlineBlankOutlinedIcon style={{ color: "dark-red" }} />
  }
  function editProduct(product) {
    navigate(paths.EditProduct, { state: { product } })
  }
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell align="center">Produto em oferta</TableCell>
              <TableCell align="center">Imagem</TableCell>
              <TableCell align="center">Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((product) => (
              <TableRow
                key={product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="product">
                  {product.name}
                </TableCell>
                <TableCell>{formatCurrency(product.price)}</TableCell>
                <TableCell align="center">{isOffer(product.offer)}</TableCell>
                <TableCell align="center">
                  <Img
                    src={product.url}
                    alt={`Imagem do produto, ${product.name}`}
                  />
                </TableCell>
                <TableCell align="center">
                  <EditIconStyles onClick={() => editProduct(product)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
