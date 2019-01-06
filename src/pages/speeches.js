import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/page'
import SEO from '../components/seo'

const SpeechesPage = ({ data: { page: {
    html,
    frontmatter: { title, image }
  }} }) => {
  
    return (
      <Page>
        <SEO title="Page two" />
        <div className='content'>
          <div className='featured-image' style={{backgroundImage: `url(${image})`}}>
            <h1>{title}</h1>
          </div>
          <div className='content-area' dangerouslySetInnerHTML={{__html: html}}></div>
          <Link to="/">Go back to the homepage</Link>
        </div>
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
            image
        }
      }
    }
      
`;