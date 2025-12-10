import styled from "styled-components"
import { Link } from "react-router-dom"
export const Container = styled.div`
  background-color: #3c3c3c;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.15);
  width: 300px;
  top: 0;
  left: 0;
  hr {
    margin: 50px 25px;
  }
`
export const ItemContainer = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  background-color: #565656;
  border-radius: 2px;
  margin: 8px;
  padding-left: 20px;
  .icon {
    color: white;
  }
`
export const ListLinks = styled(Link)`
font-style: normal; 
font-weight: normal;
line-height: 19px;
color: white;
text-decoration: none;
margin-left: 10px;
`
