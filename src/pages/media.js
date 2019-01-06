import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/page'
import SEO from '../components/seo'

import '../styles/media.scss';
const MediaPage = ({ data: { news: {
    html,
    frontmatter: { title, image }
  }} }) => {
  
    return (
      <Page className={'media'}>
        <SEO title="Page two" />
        <div className='content'>
          <div className='featured-image' style={{backgroundImage: `url(${image})`}}>
            <h1>Media Appearances</h1>
          </div>
          <div className='main-content'>
            <div className='content-area' dangerouslySetInnerHTML={{__html: html}}></div>
          </div>
        </div>
      </Page>
    )
}


export default MediaPage;

export const pageQuery = graphql`
    query MediaPage {
      news: markdownRemark(frontmatter: {uniq: { eq: "news" }}) {
        html
        frontmatter {
            title
            image
        }
      }
      speeches: markdownRemark(frontmatter: {uniq: { eq: "speeches" }}) {
        html
        frontmatter {
            title
            image
        }
      }
    }
      
`;