import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/page'
import SEO from '../components/seo'

const WorkPage = ({ data }) => {

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


export default WorkPage;

export const pageQuery = graphql`
    query WorkPage {
      page: markdownRemark(frontmatter: {uniq: { eq: "work" }}) {
        html
        frontmatter {
            title
            thumbnail
        }
      }
    }
      
`;