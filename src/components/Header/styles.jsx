import styled from "styled-components"

export const Container = styled.div`
  height: 72px;
  background-color: white;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`
export const ContainerRight = styled.div`
display: flex;
align-items: center;
gap: 20px;  
`
export const ContainerText = styled.div`
color: #555555;
font-weight: bold;
font-size: 14px;
line-height: 16px;
cursor: pointer;
`


export const PageLink = styled.a`
cursor: pointer;
text-decoration: none;
color: #555555;
line-height: 19px;
`
export const Line = styled.div`
height: 40px;
border-right: 1px solid #ababab;
`
export const PageLinkExit = styled.a`
color: #814b8f;
font-weight: bold;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
cursor: pointer;
&:hover {
  text-decoration: underline;
}
`