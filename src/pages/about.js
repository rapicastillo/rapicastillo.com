import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/page'
import SEO from '../components/seo'

const AboutPage = ({ data }) => {

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


export default AboutPage;

export const pageQuery = graphql`
    query AboutPage {
      page: markdownRemark(frontmatter: {uniq: { eq: "about" }}) {
        html
        frontmatter {
            title
            thumbnail
        }
      }
    }
      
`;