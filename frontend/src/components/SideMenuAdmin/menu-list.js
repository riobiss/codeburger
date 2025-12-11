import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import AddBoxIcon from "@mui/icons-material/AddBox"
import paths from "../../constants/paths"
const listLinks = [
  {
    id: 1,
    label: "Pedidos",
    link: paths.Order,
    icon: ShoppingBagOutlinedIcon,
  },
  {
    id: 2,
    label: "Listar Produtos",
    link: paths.ListProducts,
    icon: ShoppingCartIcon,
  },
  {
    id: 3,
    label: "Novo Produto",
    link: paths.NewProduct,
    icon: AddBoxIcon,
  },
]
export default listLinks
