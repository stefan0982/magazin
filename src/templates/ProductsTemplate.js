import React        from 'react'
import { graphql }  from 'gatsby'
import Grid         from '@material-ui/core/Grid'
import LowerBar from "../components/Navbar/LowerBar";
import ProductCard from "../components/Products/ProductCard";

const ProductsTemplate = ( { data }) => {
  return (
      <>
        <LowerBar/>
        <Grid container justify="center">
          { data.products.edges.map( ({ node }) => {
            return (
                <Grid
                    item
                    xs={ 6 }
                    sm={ 4 }
                    lg={ 4 }
                    key={ node.id }
                >
                  <ProductCard
                      name={ node.denumirea }
                      price={ node.pretul }
                      key={ node.id }
                      id={node.id}
                      imaginea={node.imaginile[0].fluid}
                  />
                </Grid>
            )
          } ) }
        </Grid>
      </>
  )
}

export const query = graphql`
  query($subcategory: String!) {
  products:allContentfulProdus(filter: {subcategoria: {elemMatch: {denumirea: {eq: $subcategory}}}}) {
    edges {
      node {
        denumirea
        pretul
        id
        imaginile {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`

export default ProductsTemplate
