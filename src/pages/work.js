import React from 'react'

import Page from '../components/page'
import SEO from '../components/seo'

const WorkPage = ({ data: { page: {
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
        </div>
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
            image
            date
            endDate
            annotation
            skills
        }
      }
    }
      
`;