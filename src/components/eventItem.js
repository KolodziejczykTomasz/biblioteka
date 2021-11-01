import React from "react"

import styled from "styled-components"

const Wrapper = styled.div`
  display: block;
  position: relative;
  width: 620px;
  min-height: 50px;
  height: auto;
  padding: 27px 30px 17px 70px;
  margin: 24px 0 24px -30px;
  background-color: #fff;
  color: black;
  cursor: pointer;
  border-radius: 20px 0px 20px 0px;
  :focus {
    -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  }
  ::before {
    content: "";
    width: 0;
    height: 0;
    border-top: 0 solid transparent;
    border-bottom: 26px solid transparent;
    border-right: 31px solid #d3d3d3;
    position: absolute;
    bottom: -26px;
    left: 0;
  }
`
const Date =styled.div`
font-size: 14px;
line-height: 21px;
font-weight: 400;
`
const Title = styled.div`
  font-size: 20px;
  line-height: 23px;
  font-weight: 600;
  transition: 0.2s ease-in-out;
  :hover {
    color: #1b5fc6;
  }
`

export const EventItem = () => (
  <Wrapper>
    <Date>04 października 2021 o 17:00</Date>
    <Title>Spotkanie autorskie z Marią Paszyńską - polską pisarką</Title>
  </Wrapper>
)
