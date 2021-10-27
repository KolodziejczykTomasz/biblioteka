import React from "react"

import styled from "styled-components"

const Wrapper = styled.div``
const Section = styled.div``
const SearchBar = styled.div``
const NaviBar = styled.div``

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  column-gap: 5px;
  row-gap: 5px;
  justify-content: center;
  align-items: center;
`

const NavItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 117px;
  height: 48px;
  margin: 0 10px;
  background-color: grey;
  text-transform: uppercase;
`

const Navigation = () => (
  <Wrapper>
    <Section>
      <SearchBar>szukaj</SearchBar>
      <NaviBar>
        <nav>
          <NavList>
            <NavItem>Aktualności</NavItem>
            <NavItem>O nas</NavItem>
            <NavItem>Filie</NavItem>
            <NavItem>Galeria</NavItem>
            <NavItem>Deklaracja dostępności</NavItem>
          </NavList>
        </nav>
      </NaviBar>
    </Section>
  </Wrapper>
)

export default Navigation
