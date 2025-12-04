import styled from "styled-components"

export const Container = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
  width: 60%;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  padding: 10px;
  border-bottom: 1px solid #81818186;
  p {
    font-size: 16px;
    color: grey;
  }
`
export const Body = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px 15px;
  img {
    border-radius: 10px;
    width: 120px;
  }

  .quantity-container {
    display: flex;
    gap: 20px;

    button{
      height: 30px;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
    p {
    margin-top: 7px;
  }
  
  }
`
export const EmptyCart = styled.div`
  p {
    font-weight: bold;
    text-align: center;
    padding: 20px;
  }
`
