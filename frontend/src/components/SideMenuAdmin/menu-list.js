import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
]
export default listLinks
