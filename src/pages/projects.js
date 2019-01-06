import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/page'
import SEO from '../components/seo'

const ProjectsPage = ({ data }) => {

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


export default ProjectsPage;

export const pageQuery = graphql`
    query ProjectsPage {
      page: markdownRemark(frontmatter: {uniq: { eq: "projects" }}) {
        html
        frontmatter {
            title
            thumbnail
        }
      }
    }
      
`;