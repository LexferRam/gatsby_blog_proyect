import React from 'react';
import {graphql} from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {H1} from '../elements'
import {Container, Post, FeatureImage} from '../components'

const singlePost = ({data}) => {

    const featureImage = data.mdx.frontmatter.image?.childImageSharp.fixed;
    console.log(data)
    return(
        <Container>
            <FeatureImage fixed={featureImage} ></FeatureImage>
                <Post>
                    <H1 margin="0 0 2rem 0">
                        {data.mdx.frontmatter.title}
                        {/* AQUI */}
                    </H1>
                    <MDXRenderer>
                        {data.mdx.body}
                    </MDXRenderer>
                </Post>
        </Container>
    )


}

export default singlePost;

export const pageQuery = graphql`
query SinglePostQuery($id: String!){
    mdx(id: {eq: $id}) {
    body
    frontmatter {
      date
      excerpt
      slug
      title
      image {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
}`

