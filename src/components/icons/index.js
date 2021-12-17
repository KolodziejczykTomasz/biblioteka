import React from "react"
import { FaMinus } from "react-icons/fa"

import styled from "styled-components"

const Wrapper = styled.div`
  color: grey;
  padding: 0 2px;
  transform: rotate(90deg);
`

export const VerticalLine = () => {
  return (
    <Wrapper>
      <FaMinus />
    </Wrapper>
  )
}
