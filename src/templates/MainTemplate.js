import React from "react"

import { Navigation } from "../components/sections/navigation"
import { Header } from "../components/sections/header"
import { Jumbotron } from "../components/sections/jumbotron"
import { Footer } from "../components/sections/footer"

import { GlobalStyle } from "../assets/styles/GlobalStyle"
import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider } from "styled-components"
import { theme } from "../assets/styles/theme"


import styled from "styled-components"

const Wrapper = styled.div``

const MainPageTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <ChakraProvider>
          <Header />
          <Navigation />
          <Jumbotron />
          {children}
          <Footer />
        </ChakraProvider>
      </Wrapper>
    </ThemeProvider>
  )
}

export default MainPageTemplate
