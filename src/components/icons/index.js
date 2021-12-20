import React from "react"
import { FaSlash } from "react-icons/fa"

import styled from "styled-components"

const Wrapper = styled.div`
  color: grey;
  padding: 0 2px;
  transform: rotate(52deg);
`

export const VerticalLine = () => {
  return (
    <Wrapper>
      <FaSlash />
    </Wrapper>
  )
}
