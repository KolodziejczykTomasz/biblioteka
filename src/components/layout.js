import * as React from "react"
import { GlobalStyle } from "../assets/styles/GlobalStyle"
import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider } from "styled-components"
import { theme } from "../assets/styles/theme"
import "../assets/styles/fonts.css"
import styled from "styled-components"

import PropTypes from "prop-types"

const Wrapper = styled.div``

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <ChakraProvider>
            <main> {children}</main>
          </ChakraProvider>
        </Wrapper>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
