import styled from "styled-components"

export const Container = styled.div``

export const ProductImg = styled.img`
  width: 100%;
`
export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: ${props => (props.$isActiveCategory ? "#9758A6" : "#9a9a9d")};
  font-size: 17px;
  line-height: 30px;
  border-bottom: ${props =>
    props.$isActiveCategory && "2px solid #9758A6"};
    padding-bottom: 6px;
`
export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`
