import styled from "styled-components"
import { Button } from "../../../components/Button"

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    background-color: #565656;
    border-radius: 10px;
    padding: 30px;
  }
`
export const Label = styled.p`
  font-size: 14px;
  color: white;
  margin-bottom: 3px;
`

export const Input = styled.input`
  height: 40px;
  background-color: white;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 8px;
  margin-bottom: 25px;
  width: 100%;
`
export const ButtonStyled = styled(Button)`
  width: 100%;
  margin-top: 25px;
`
