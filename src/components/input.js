import styled from 'styled-components';

export const Input = styled.input`
  padding: 5px 8px;
  border: 1px solid ${({ theme }) => theme.colors.darkPurple};
  box-sizing: border-box;
  width: 300px;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 25px;
  & :focus {
    outline: rgb(27, 95, 198) solid 2px;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`