import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as Yup from "yup"
import {toast} from "react-toastify"
import {Link} from "react-router-dom"

import api from "../../services/api.js"

import RegisterImg from "../../assets/resgister-img.svg"
import Logo from "../../assets/logo.svg"
import { ErrorMessage } from "../../components/index.js"
import {Button} from "../../components/index.js"
import {
  Container,
  RegisterImage,
  ContainerItens,
  Label,
  Input,
  SignInLink,
} from "./styles.jsx"

export function Register() {
  const schema = Yup.object({
    name: Yup.string().required("Nome é obrigatório"),
    email: Yup.string().email("Email inválido").required("Email é obrigatório"),
    password: Yup.string()
      .required("Senha é obrigatória")
      .min(8, "Senha deve ter pelo menos 8 caracteres"),
    confirmPassword: Yup.string()
      .required("Confirmação de senha é obrigatória")
      .oneOf([Yup.ref("password")], "Senhas não conferem")
      .min(8, "Senha deve ter pelo menos 8 caracteres"),
  }).required()

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async clientData => {
    try {
      const {status} = await api.post(
        "users",
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password,
        },
        {validateStatus: () => true}
      )
      if (status === 201 || status === 200) {
        toast.success("Cadastrado com sucesso", {})
      } else if (status === 409) {
        toast.error("E-mail ja cadastrado, faça login para continuar")
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error("Falha no sistema, tente novamente")
    }
  }

  return (
    <Container>
      <RegisterImage src={RegisterImg} />
      <ContainerItens>
        <img src={Logo} alt="logo" />
        <h1>Cadastre-se</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label $error={!!errors.name?.message}>Nome</Label>
          <Input
            type="text"
            {...register("name")}
            $error={!!errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
          <Label $error={!!errors.email?.message}>Email</Label>
          <Input
            type="email"
            {...register("email")}
            $error={!!errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
          <Label $error={!!errors.password?.message}>Senha</Label>
          <Input
            type="password"
            {...register("password")}
            $error={!!errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          <Label $error={!!errors.confirmPassword?.message}>
            Confirmar senha
          </Label>
          <Input
            type="password"
            {...register("confirmPassword")}
            $error={!!errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
          <Button
            type="submit"
            style={{marginTop: "25px", marginBottom: "25px"}}
          >
            Sign Up
          </Button>
        </form>
        <SignInLink>
          Já possui conta?{" "}
          <Link to={"/login"} style={{color: "white"}}>
            Sign In
          </Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
