import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import ContextConsumer from '../../Context'
import CategoryCard from "./CategoryCard";

const query = graphql`
  {
  categoriesRo:allContentfulCategoria(filter: {ro: {eq: true}}) {
    edges {
      node {
        denumirea
        ro
      }
    }
  }
  categoriesRu:allContentfulCategoria(filter: {ro: {eq: false}}) {
    edges {
      node {
        denumirea
        ro
      }
    }
  }
}
`

const CategoriesCards = () => {

    const {categoriesRo, categoriesRu} = useStaticQuery(query)


    return (
        <ContextConsumer>
            {({data}) => {
                return (
                    <>
                        {data.language ? categoriesRo.edges.map(({node}) => (
                            <CategoryCard name={node.denumirea} key={node.denumirea} />
                        )) : categoriesRu.edges.map(({node}) => (
                            <CategoryCard name={node.denumirea} key={node.denumirea}/>
                        ))}
                    </>
                )
            }}
        </ContextConsumer>
    )
}

export default CategoriesCards

