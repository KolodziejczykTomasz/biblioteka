import React from "react"

import { Header } from "../components/sections/header"
import { Jumbotron } from "../components/sections/jumbotron"
import { Footer } from "../components/sections/footer"

import { GlobalStyle } from "../assets/styles/GlobalStyle"
import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider } from "styled-components"
import { theme } from "../assets/styles/theme"

import "../assets/styles/fonts.css"

import styled from "styled-components"

const Wrapper = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  max-width: 1250px;
  height: 90%;
  padding-bottom: 75px;
`

const MainPageTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <ChakraProvider>
          <Header />
          <Jumbotron />
          {children}
          <Footer />
        </ChakraProvider>
      </Wrapper>
    </ThemeProvider>
  )
}

export default MainPageTemplate
