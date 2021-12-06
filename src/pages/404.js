import * as React from "react"
import { Header } from "../components/sections/header"
import { Jumbotron } from "../components/sections/jumbotron"
import { Footer } from "../components/sections/footer"
import Layout from "../layouts/layout"
import Seo from "../components/seo"

import styled from "styled-components"

const Wrapper = styled.div``

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Wrapper>
      <Header />
      <Jumbotron />
      <div>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
      <Footer />
    </Wrapper>
  </Layout>
)

export default NotFoundPage
