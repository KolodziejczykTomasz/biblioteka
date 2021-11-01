import styled from "styled-components"

export const ButtonMore = styled.button`
  margin: 30px 0;
  padding: 2px 10px;
  width: 202px;
  height: 56px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  background-color: rgb(27, 95, 198);
  color: white;
  transition: ease-in 0.2s;
  :hover {
    color: rgb(27, 95, 198);
    background-color: white;
    border: 2px solid rgb(27, 95, 198);
  }

  :focus {
    outline: rgb(27, 95, 198) solid 2px;
    color: rgb(27, 95, 198);
    background-color: white;
    border: 2px solid rgb(27, 95, 198);
  }
`
