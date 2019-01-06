import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/page'
import SEO from '../components/seo'

const CodingAsBakingPage = ({ data: { page: {
  html,
  frontmatter: { title, thumbnail }
}} }) => {

  console.log(data);
  return (
    <Page>
      <SEO title="Page two" />
      <h1>Coding as Baking</h1>
      <p>html</p>
      <Link to="/">Go back to the homepage</Link>
    </Page>
  )
}


export default CodingAsBakingPage;

export const pageQuery = graphql`
    query CodingAsBakingPage {
      page: markdownRemark(frontmatter: {uniq: { eq: "codingasbaking" }}) {
        html
        frontmatter {
            title
            thumbnail
        }
      }
    }
      
`;