import { Container, Input, Label, ButtonStyled } from "./styles.jsx"
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
  const { register } = useForm()

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
        <ButtonStyled>Adicionar produto </ButtonStyled>
      </form>
    </Container>
  )
}
