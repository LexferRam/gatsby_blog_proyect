import React from 'react';
import { graphql } from 'gatsby';
import {Container,Content, FeatureImage,Pagination} from '../components'
import { ContentCard} from '../elements'
import {H1, P} from '../elements'

//pageContext es la manera en la que podemos leer los valores que se pasant
//via context en el archivo gatsby-node los valores que vienen en el context son:
// context:{
//     limit: postPerPage,
//     skip: i * postPerPage,
//     numPages,
//     currentPage: i+1
// }
export default function allPosts({pageContext, data}){
    const {currentPage,numPages } = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`;
    const nextPage = `/${currentPage + 1}`;
    
    const posts = data.allMdx.edges;
    console.log(posts)

    return(
        <Container>
            <FeatureImage />
            <Content>
                <H1 textAlign='center' margin="0 0 1rem 0">
                    Lorem ipsum dolor sit amet 
                </H1>
                <P color="dark2" textAlign="center">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </P>

                {posts.map(post => (
                    <ContentCard 
                        key={post.node.frontmatter.slug}
                        date={post.node.frontmatter.date}
                        title={post.node.frontmatter.title}
                        excerpt={post.node.frontmatter.excerpt}
                        slug={post.node.frontmatter.slug}
                    />
                ))}

            </Content>
            <Pagination 
                isFirst={isFirst}
                isLast={isLast}
                prevPage={prevPage}
                nextPage={nextPage}
            />
        </Container>
    )
};


export const pageQuery = graphql`
    query AllPostsQuery($skip: Int!, $limit: Int!){
        allMdx(sort: {fields: frontmatter___date, order: DESC}, skip: $skip, limit: $limit) {
            edges {
                node {
                    frontmatter {
                    slug
                    title
                    date(formatString: "MMMM DD, YYYY")
                    excerpt
                    }
                }
            }
        }
    }
`