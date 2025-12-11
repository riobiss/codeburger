import { Container, Input, Label } from "./styles.jsx"
import { Button } from "../../../components/Button"
import ReactSelect from "react-select"
import api from "../../../services/api.js"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

export default function ListProducts() {
  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get("products")
    }
    loadOrders()
  }, [])
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <Container>
      <form noValidate>
        {/* calaboca html */}
        <Label>Nome</Label>
        <Input type="text" {...register("name")} />
        <Label>Preço</Label>
        <Input type="number" {...register("name")} />
        <Label>Upload da imagem</Label>
        <Input type="file" accept="image/png, image/jpeg" />
        <ReactSelect />
        <Button>Adicionar produto </Button>
      </form>
    </Container>
  )
}
