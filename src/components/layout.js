import * as React from "react"
import { VerticalMenu } from "../components/verticalMenu"
import PropTypes from "prop-types"

import "./layout.css"

import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 0.9fr;
  height: 100vh;
  width: 100%;
  max-width: 1920px;
`

const Aside = styled.div`
  border-right: 1px solid grey;
`

const Main = styled.div``

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Aside>
        <VerticalMenu />
      </Aside>
      <Main> 
        <main> {children}</main>
      </Main>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
