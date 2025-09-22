import react from "react"
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
} from "./styles"

export default function Login() {
  return (
    <Container>
      <LoginImage src={LoginImg} />
      <ContainerItens>
        <img src={Logo} alt="logo" />
        <h1>Login</h1>
        <Label>Email</Label>
        <Input />
        <Label>Senha</Label>
        <Input />
        <Button>Sign in</Button>
        <SignInLink>
          Não possui conta? <a>Sign Up</a>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
