import React                       from 'react';
import Grid                        from "@material-ui/core/Grid";
import ProductCard                 from "./Products/ProductCard";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
 {
  data:allContentfulProdus(filter: {recomandat: {eq: true}}) {
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
        categoria {
          denumirea
        }
      }
    }
  }
}
`

const Recommended = () => {
  const { data } = useStaticQuery(query)
  return (
      <>
        <Grid container
              justify="center">
          {data.edges.map(( { node } ) => {
            return (
                <Grid
                    item
                    xs={6}
                    sm={4}
                    lg={4}
                    key={node.id}
                >
                  <ProductCard
                      name={node.denumirea}
                      price={node.pretul}
                      key={node.id}
                      id={node.id}
                      imaginea={node.imaginile[0].fluid}
                      recommended={true}
                      categoria={node.categoria[0].denumirea}
                  />
                </Grid>
            )
          })}
        </Grid>
      </>
  );
};


export default Recommended;
