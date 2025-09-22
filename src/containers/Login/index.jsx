import react from "react"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

import LoginImg from "../../assets/login-image.svg"
import Logo from "../../assets/logo.svg"

import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  Button,
  SignInLink,
  ErrorMessage,
} from "./styles"

export default function Login() {
  const schema = yup
    .object({
      email: yup
        .string()
        .email("Digite um email válido")
        .required("O e-mail é obrigatório"),
      password: yup
        .string()
        .required("a senha é obrigatório")
        .min(8, "À senha deve ter no mínimo 8 dígitos"),
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = data => console.log(data)

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
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
          <Label>Senha</Label>
          <Input
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          <Button type="submit">Sign in</Button>
        </form>
        <SignInLink>
          Não possui conta? <a>Sign Up</a>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
