import styled from "styled-components"
import {Link} from "react-router-dom"

export const Container = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;
  .keen-slider{

  width: 90%;

  }
  .keen-slider-slide{
  width: 200px; 

  }
`

export const CategoryImg = styled.img`
  width: 50%;
`
export const Carousel = styled.div`
  `

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Image = styled.img`
  border-radius: 10px;
  
`

export const Button = styled(Link)`
text-decoration: none;
display: flex;
align-items: center;
justify-content:center;
  margin-top: 16px;
  background-color: #814b8f;
  border-radius: 8px;
  height: 50px;
  border: none;
  font-weight: bold;
  font-size: 18px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`
