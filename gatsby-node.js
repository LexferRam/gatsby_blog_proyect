/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

//este archivo permite crear pgs dinamicamente
exports.createPages = async function({actions, graphql}) {
    const {data}  = await graphql(`
        query{
            allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                node {
                    frontmatter {
                    slug
                    }
                    id
                }
                }
            }
        }
    `)

    //Create paginated pages for posts
    const postPerPage = 3;

    //calcula cuantas pgs gatsby necesita crear(redondeando el valor al min)
    const numPages = Math.ceil(data.allMdx.edges.length/postPerPage);

    //creamos un array y recorremos con foraeach ignorando el 1er param(el callback, colocando un _)
    //Array.from() recibe un obj y crea un array con los elementos que recibe
    //CREA LAS PAGINAS PARA LA PAGINACION DE LOS POST
    Array.from({length:numPages}).forEach((_,i) => {
        actions.createPage({
            path: i === 0 ? `/` : `/${i+1}`,
            component:require.resolve(`./src/templates/allPosts.js`),
            context:{
                limit: postPerPage,
                skip: i * postPerPage,
                numPages,
                currentPage: i+1
            }
        })
    })
    //createPage single blogpost
    data.allMdx.edges.forEach(edge => {
        const slug = edge.node.frontmatter.slug;
        const id = edge.node.id;

        actions.createPage({
            path:slug,
            component:require.resolve(`./src/templates/singlePosts.js`),
            context:{id}
        })
    })
} 
