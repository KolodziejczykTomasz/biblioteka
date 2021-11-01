import styled from "styled-components"

export const Button = styled.button` 
  margin: 20px 0;
  padding: 2px 10px;
  width: 202px;
  height: 56px;
  font-size: 16px;
  line-height: 24px;  
  background-color: white;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  color: rgb(27, 95, 198);
  transition: ease-in 0.2s;
  :hover {
    color: white;
    background-color: rgb(27, 95, 198);
  }
  :focus {
    outline: rgb(27, 95, 198) solid 2px;
  }
`
