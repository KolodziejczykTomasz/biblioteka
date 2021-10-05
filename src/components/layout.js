import * as React from "react"
import { GlobalStyle } from "../assets/styles/GlobalStyle"

import styled from "styled-components"

import PropTypes from "prop-types"

const Wrapper = styled.div``

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <main> {children}</main>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
