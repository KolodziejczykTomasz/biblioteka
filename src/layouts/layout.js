import React from "react"

import { GlobalStyle } from "../assets/styles/GlobalStyle"
import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider } from "styled-components"
import { theme } from "../assets/styles/theme"

import "../assets/styles/fonts.css"
import "antd/dist/antd.css"

import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <>
     
      <ThemeProvider theme={theme}>
        <ChakraProvider>
           <GlobalStyle />
          {children}</ChakraProvider>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
