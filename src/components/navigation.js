import React from "react"

import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border: 2px solid red;
  justify-content: center;
  align-items: center;
`

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  column-gap: 5px;
  row-gap: 5px;
`

const NavItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 186px;
  height: 88px;
  margin: 0 10px;
  text-transform: uppercase;
  color: black;
  font-size: 16px;
  line-height: 24px;
  background-color: rgb(238, 238, 238);
  transition: ease-in 0.2s;
  cursor: pointer;
  & p {
    display: block;
    margin: 0 auto;
    text-align: center;
  }
  :hover {
    color: white;
    background-color: rgb(27, 95, 198);
  }
`

const Navigation = () => (
  <Wrapper>
    <nav>
      <NavList>
        <NavItem>Aktualności</NavItem>
        <NavItem>O nas</NavItem>
        <NavItem>Filie</NavItem>
        <NavItem>Galeria</NavItem>
        <NavItem>
          <p>Deklaracja dostępności</p>
        </NavItem>
      </NavList>
    </nav>
  </Wrapper>
)

export default Navigation
