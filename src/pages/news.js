import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/page'
import SEO from '../components/seo'

const NewsPage = ({ data: { page: {
    html,
    frontmatter: { title, image }
  }} }) => {
  
    return (
      <Page>
        <SEO title="Page two" />
        <div className='content'>
          <h1>{title}</h1>
          <div className='featured-image' style={{backgroundImage: `url(${image})`}}></div>
          <div className='content-area' dangerouslySetInnerHTML={{__html: html}}></div>
          <Link to="/">Go back to the homepage</Link>
        </div>
      </Page>
    )
}


export default NewsPage;

export const pageQuery = graphql`
    query NewsPage {
      page: markdownRemark(frontmatter: {uniq: { eq: "news" }}) {
        html
        frontmatter {
            title
            image
        }
      }
    }
      
`;