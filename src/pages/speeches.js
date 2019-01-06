import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/page'
import SEO from '../components/seo'

const SpeechesPage = ({ data }) => {

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


export default SpeechesPage;

export const pageQuery = graphql`
    query SpeechesPage {
      page: markdownRemark(frontmatter: {uniq: { eq: "speeches" }}) {
        html
        frontmatter {
            title
            thumbnail
        }
      }
    }
      
`;