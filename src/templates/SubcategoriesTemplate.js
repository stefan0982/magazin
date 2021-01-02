import React        from 'react'
import { graphql }  from "gatsby";
import CategoryCard from "../components/Categories/CategoryCard";
import LowerBar     from "../components/Navbar/LowerBar";

const SubcategoriesTemplate = ({data}) => {
  return (
      <>
        <LowerBar/>
        { data.subcategories.edges.map( ({ node }) => <CategoryCard name={node.denumirea} key={node.denumirea}/>)}
      </>
  )
}

export const query = graphql`
  query($category: String!){
  subcategories:allContentfulSubcategorii(filter: {categoria: {denumirea: {eq: $category}}}, sort: {fields: createdAt, order: ASC}) {
    edges {
      node {
        denumirea
      }
    }
  }
}

`
export default SubcategoriesTemplate
