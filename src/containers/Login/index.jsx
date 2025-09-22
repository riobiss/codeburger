import react from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import api from "../../services/api"

import LoginImg from "../../assets/login-image.svg"
import Logo from "../../assets/logo.svg"

import Button from "../../components/Button/index.jsx"
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SignInLink,
  ErrorMessage,
} from "./styles.js"

export default function Login() {
  const schema = yup
    .object({
      email: yup
        .string()
        .email("Email inválido")
        .required("Email é obrigatório"),
      password: yup
        .string()
        .required("Senha é obrigatória")
        .min(8, "Senha deve ter pelo menos 8 caracteres"),
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async clientData => {
    const response = await api.post("sessions", {
      email: clientData.email,
      password: clientData.password,
    })
  }

  return (
    <Container>
      <LoginImage src={LoginImg} />
      <ContainerItens>
        <img src={Logo} alt="logo" />
        <h1>Login</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register("email")}
            $error={!!errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
          <Label>Senha</Label>
          <Input
            type="password"
            {...register("password")}
            $error={!!errors.password ?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          <Button type="submit" style={{marginTop: "75px", marginBottom: "25px"}}>Sign in</Button>
        </form>
        <SignInLink>
          Não possui conta? <a>Sign Up</a>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
