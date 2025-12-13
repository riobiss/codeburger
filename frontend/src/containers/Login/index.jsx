import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link, useNavigate } from "react-router-dom"
import * as yup from "yup"
import { toast } from "react-toastify"
import api from "../../services/api"
import { useUser } from "../../hooks/UserContext.jsx"

import LoginImg from "../../assets/login-image.svg"
import Logo from "../../assets/logo.svg"

import { Button } from "../../components/index.js"
import { ErrorMessage } from "../../components/index.js"
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SignInLink,
} from "./styles.jsx"
import paths from "../../constants/paths.js"

export function Login() {
  const navigate = useNavigate()

  const { putUserData } = useUser()
  const schema = yup
    .object()
    .shape({
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
    try {
      const { data } = await toast.promise(
        api.post("sessions", {
          email: clientData.email,
          password: clientData.password,
        }),
        {
          pending: "Verificando seus dados",
          success: "Seja bem-vindo(a)",
          error: "Verifique seu e-mail e senha",
        }
      )

      putUserData(data)

      setTimeout(() => {
        if (data.admin) {
          navigate(paths.Order)
        } else {
          navigate(paths.Home)
        }
      }, 1000)
    } catch (err) {
      if (err.response?.status !== 401) {
        console.error("Erro inesperado:", err)
      }
    }
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
            $error={!!errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          <Button
            type="submit"
            style={{ marginTop: "75px", marginBottom: "25px" }}
          >
            Sign in
          </Button>
        </form>
        <SignInLink>
          Não possui conta?{" "}
          <Link style={{ color: "white" }} to="/cadastro">
            Sign Up
          </Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
