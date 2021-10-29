import React from "react"
import Navigation from "./navigation"

import styled from "styled-components"

const Wrapper = styled.div`
display: block;
margin-bottom: 50px;
`

const RowNavigation = styled.div`
  display: block;
  margin: 20px auto;
  width: 1212px;
  height: 200px;
`

export const Header = () => (
  <Wrapper>
    <div>
      <div>
        <div>Logo</div>
        <div>szukaj</div>
      </div>
      <RowNavigation>
        <Navigation />
      </RowNavigation>
    </div>
  </Wrapper>
)
