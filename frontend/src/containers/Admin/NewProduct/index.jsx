import {
  Container,
  Input,
  Label,
  ButtonStyled,
  LabelUpload,
  FileUploadIconStyles,
} from "./styles.jsx"
import ReactSelect from "react-select"
import api from "../../../services/api.js"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

export default function ListProducts() {
  const [fileName, setFileName] = useState()
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
        <LabelUpload>
          {fileName ? (
            fileName
          ) : (
            <>
              <FileUploadIconStyles />
              Carregue a imagem do produto
            </>
          )}
          <input
            type="file"
            accept="image/png, image/jpeg"
            $isActive={true}
            {...register("file")}
            onChange={(value) => {
              setFileName(value.target.files[0]?.name)
            }}
          />
        </LabelUpload>

        <ReactSelect />
        <ButtonStyled>Adicionar produto </ButtonStyled>
      </form>
    </Container>
  )
}
