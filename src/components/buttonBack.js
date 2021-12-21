import styled from "styled-components"

export const ButtonBack = styled.button`
  margin: 30px 0;
  padding: 2px 10px;
  width: 202px;
  height: 56px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  color: rgb(27, 95, 198);
  background-color: white;
  border: 2px solid rgb(27, 95, 198);
  transition: ease-in 0.2s;
  :hover {
    background-color: rgb(27, 95, 198);
    color: white;
  }

  :focus {
    outline: rgb(27, 95, 198) solid 2px;
    color: white;
    background-color: white;
    border: 2px solid rgb(27, 95, 198);
  }
`
