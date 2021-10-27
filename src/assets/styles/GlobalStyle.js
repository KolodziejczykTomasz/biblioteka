import { createGlobalStyle } from "styled-components"
import "antd/dist/antd.css"

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`
