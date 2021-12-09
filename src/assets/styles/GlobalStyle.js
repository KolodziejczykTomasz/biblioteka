import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }  
    *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
 .chakra-ui-light { 
       margin: 0 auto;
} 

body {      
  display: block;
  width: 100%;
  height: auto; 
  max-width: 1920px;
  margin: 0 auto;   
  } 


`
