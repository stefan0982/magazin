import React       from 'react'
import { graphql } from 'gatsby'
import ProductContainer from "../components/ProductPage/ProductContainer";

const ProductTemplate = ({ data }) => {
  return (
      <>
        <ProductContainer
            name={ data.produs.denumirea }
            price={ data.produs.pretul }
            // tabel={ data.produs.tabel.internal.content }
            id={ data.produs.id }
            imaginile={ data.produs.imaginile }
            cod={data.produs.codul}
            specificatii={data.produs.specificatii}
            dimensiuni={data.produs.dimensiuni}
            descriere={data.produs.descriere}
        />
      </>
  )
}

// query cu tabel
// export const query = graphql`
//   query($product: String!) {
//   produs:contentfulProdus(denumirea: {eq: $product}) {
//   ...
//     tabel {
//       internal {
//         content
//       }
//     }
//   }
// }
// `

export const query = graphql`
  query($product: String!) {
  produs:contentfulProdus(denumirea: {eq: $product}) {
    denumirea
    pretul
    codul
    id
    imaginile {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
    dimensiuni
    specificatii
    descriere 
  }
}
`

export default ProductTemplate
