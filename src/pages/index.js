import React       from "react"
import "./styles.css"
import LowerBar    from "../components/Navbar/LowerBar";
import Cards       from "../components/Categories/CategoriesCards";
import Recommended from "../components/Recommended";

const IndexPage = () => {
  return (
      <>
            <LowerBar/>
            <Cards />
            <Recommended/>
      </>
  )
}

export default IndexPage
