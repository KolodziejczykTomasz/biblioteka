import * as React from "react"
import { Header } from "../components/header"
import { Jumbotron } from "../components/jumbotron"
import { NewsList } from "../components/newsList"
import { EventsList } from "../components/eventsList"
import {GalleryList} from "../components/galleryList"
import { Footer } from "../components/footer"
import Layout from "../components/layout"
import Seo from "../components/seo"

import styled from "styled-components"

const Wrapper = styled.div``

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Wrapper>
      <Header />
      <Jumbotron />
      <NewsList />
      <EventsList />
      <GalleryList />
      <Footer />
    </Wrapper>
  </Layout>
)

export default IndexPage
