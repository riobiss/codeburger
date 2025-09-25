import styled from "styled-components"

export const Container = styled.div`
  background-color: white;
  box-shadow: 0px 15px 30px #393939a9;
  border-radius: 30px;
  display: flex;
  gap: 12px;
  padding: 16px;
  width: max-content;
  max-width: 370px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`
export const Image = styled.img`
  width: 150px;
  border-radius: 10px;
`
export const ProductName = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
`
export const ProductPrice = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  margin-top: 30px;
`
export const Button = styled.button``
