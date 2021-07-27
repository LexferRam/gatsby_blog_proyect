import * as React from "react"
import {Container,FeatureImage, Content}  from '../components'
import { ContentCard } from "../elements"

const IndexPage = () => (

  <Container>
    <FeatureImage />
    <Content>
      <ContentCard date="2021-07-25" title="My first Post! Hello World!" excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" slug="test"/>
    </Content>
  </Container>
)

export default IndexPage
