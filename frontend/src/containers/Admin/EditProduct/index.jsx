import {
  Container,
  Input,
  Label,
  ButtonStyled,
  LabelUpload,
  FileUploadIconStyles,
  OfferInput
} from "./styles.jsx"
import * as Yup from "yup"
import ReactSelect from "react-select"
import { ErrorMessage } from "../../../components/ErrorMessage/index.jsx"
import api from "../../../services/api.js"
import { useEffect, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from "react-toastify"
import { useLocation, useNavigate } from "react-router-dom"
import paths from "../../../constants/paths.js"
export default function EditProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()
  console.log(navigate)
  const { state } = useLocation()
  const { product } = state

  const schema = Yup.object().shape({
    name: Yup.string()
      .required("Digite o nome do produto")
      .min(3, "Deve haver mais de 3 caracteres"),
    price: Yup.string().required("Digite o preço do produto"),
    category: Yup.object().required("Selecione a categoria do produto"),
    offer: Yup.bool()
  })
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    const productDataFormData = new FormData()
    productDataFormData.append("name", data.name)
    productDataFormData.append("price", data.price)
    productDataFormData.append("category_id", data.category.id)
    productDataFormData.append("file", data.file[0])
    productDataFormData.append("offer", data.offer)

    await toast.promise(
      api.put(`products/${product.id}`, productDataFormData),
      {
        pending: "Editando novo produto",
        success: "Produto editado com sucesso",
        error: "Falha ao editar produto",
      }
    )
    setTimeout(() => {
      navigate(paths.ListProducts)
    }, 1000)
  }

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
        <div>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register("name")}
            defaultValue={product.name}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Preço</Label>
          <Input
            type="number"
            {...register("price")}
            defaultValue={product.price}
          />
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
              accept="image/png, image/jpeg, image/jpg, image/svg"
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
            defaultValue={product.category}
            render={({ field }) => {
              return (
                <ReactSelect
                  {...field}
                  options={categories}
                  getOptionLabel={(cat) => cat.name}
                  getOptionValue={(cat) => cat.id}
                  placeholder="Categorias"
                  defaultValue={product.category}
                />
              )
            }}
          ></Controller>
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>
        <OfferInput>
          <input
            type="checkbox"
            {...register("offer")}
            defaultChecked={product.offer}
          />

          <label>Produto em oferta</label>
        </OfferInput>
        <ButtonStyled>Editar produto</ButtonStyled>
      </form>
    </Container>
  )
}
