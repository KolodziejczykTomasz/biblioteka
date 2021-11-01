import React from "react"
import { FaSearch } from "react-icons/fa"
import { FaAngleRight } from "react-icons/fa"
import { FaRegClock } from "react-icons/fa"

import styled from "styled-components"

const Wrapper = styled.div``
const WrapperRightIcon = styled.div`
  font-size: 16px;
`
const WrapperClockIcon = styled.div`
  margin-right: 5px;
`

export const ClockIcon = () => {
  return (
    <WrapperClockIcon>
      <FaRegClock />
    </WrapperClockIcon>
  )
}

export const SearchIcon = () => {
  return (
    <Wrapper>
      <FaSearch />
    </Wrapper>
  )
}

export const RightIcon = () => {
  return (
    <WrapperRightIcon>
      <FaAngleRight />
    </WrapperRightIcon>
  )
}
