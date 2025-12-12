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
import { useForm, SubmitHandler, Controller } from "react-hook-form"

export default function ListProducts() {
  const { register, handleSubmit, control } = useForm()
  const onSubmit = (data) => console.log(data)
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories")
      setCategories(data)
    }
    loadCategories()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
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
            id="image-input"
            accept="image/png, image/jpeg"
            {...register("file")}
            onChange={(value) => {
              setFileName(value.target.files[0]?.name)
            }}
          />
        </LabelUpload>
        <Controller
          name="category_id"
          control={control}
          render={({ field }) => {
            return (
              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.id}
                placeholder="Categorias"
              />
            )
          }}
        ></Controller>
        <ButtonStyled>Adicionar produto </ButtonStyled>
      </form>
    </Container>
  )
}
