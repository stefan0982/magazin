exports.onCreateWebpackConfig = ({stage, loaders, actions}) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /cart-localstorage/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}


const path = require('path')
const slug = require('slug')

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions
  const {data} = await graphql(`
    {
      categories:
      allContentfulCategoria {
        edges {
          node {
            denumirea
          }
        }
      }
      products: 
      allContentfulProdus {
        edges {
          node {
            denumirea
            categoria {
              denumirea
            }
          }
        }
      }
    }
   `)
  data.categories.edges.forEach(edge => {
    const categorySlug = slug(edge.node.denumirea)
    createPage({
      path: `/${categorySlug}`,
      component: path.resolve(`./src/templates/ProductsTemplate.js`),
      context: {
        category: edge.node.denumirea,
      },
    })
  })
  data.products.edges.forEach(edge => {
    edge.node.categoria.map(item => {
      const categorySlug = slug(item.denumirea)
      const prodSlug = slug(edge.node.denumirea)
      createPage({
        path: `/${categorySlug}/${prodSlug}/`,
        component: path.resolve(`./src/templates/ProductTemplate.js`),
        context: {
          product: edge.node.denumirea
        }
      })
    })
  })
}