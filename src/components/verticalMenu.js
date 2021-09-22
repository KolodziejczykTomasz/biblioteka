import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  justify-content: space-between;
  align-self: center;
  text-decoration: none;
  background-color: #282c34;
  font-size: 18px;
  color: white;
`

const activeClassName = "active"
const MenuLink = styled(Link).attrs({ activeClassName })`
  color: white;
  padding: 10px 30px 10px 0;
  text-decoration: none;
  text-align: right;
  text-transform: uppercase;
  font-weight: 600;
  position: relative;
  &.${activeClassName} {
    &::after {
      opacity: 1;
    }
  }
  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: "";
    position: absolute;
    width: 18px;
    height: 5px;
    top: 50%;
    transform: translateX(-100%);
    right: -18px;
    background-color: gold;
  }
`

export const VerticalMenu = () => (
  <Wrapper>
    <MenuLink activeClassName="active" to="/" active exact>
      Home
    </MenuLink>
    <MenuLink to="/rogoz">Rogóż</MenuLink>
    <MenuLink to="/runowo">Runowo</MenuLink>
    <MenuLink to="#">Kontakt</MenuLink>
  </Wrapper>
)
