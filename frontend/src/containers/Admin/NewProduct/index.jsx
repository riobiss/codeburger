import {
  Container,
  Input,
  Label,
  ButtonStyled,
  LabelUpload,
  FileUploadIconStyles,
} from "./styles.jsx"
import * as Yup from "yup"
import ReactSelect from "react-select"
import { ErrorMessage } from "../../../components/ErrorMessage/index.jsx"
import api from "../../../services/api.js"
import { useEffect, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

export default function ListProducts() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])

  const schema = Yup.object().shape({
    name: Yup.string()
      .required("Digite o nome do produto")
      .min(3, "Deve haver mais de 3 caracteres"),
    price: Yup.string().required("Digite o preço do produto"),
    category: Yup.object().required("Selecione a categoria do produto"),
    file: Yup.mixed()
      .test("required", "Carregue um arquivo", (value) => {
        return value && value.length > 0
      })
      .test("filesize", "Carregue arquivos de até 2Mb", (value) => {
        return value && value[0]?.size <= 2000000
      }),
  })
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories")
      setCategories(data)
    }
    loadCategories()
  }, [])

  const onSubmit = (data) => console.log(data)

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input type="text" {...register("name")} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Preço</Label>
          <Input type="number" {...register("price")} />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>

        <div>
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
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>
        <div>
          <Controller
            name="category"
            control={control}
            render={({ field }) => {
              return (
                <ReactSelect
                  {...field}
                  options={categories}
                  getOptionLabel={(cat) => cat.name}
                  getOptionValue={(cat) => cat.id}
                  placeholder="Categorias"
                />
              )
            }}
          ></Controller>
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>

        <ButtonStyled>Adicionar produto</ButtonStyled>
      </form>
    </Container>
  )
}
