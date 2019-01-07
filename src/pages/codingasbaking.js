import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/page'
import SEO from '../components/seo'

import BakeList from '../components/bakeList';

import '../styles/codingasbaking.scss';

const CodingAsBakingPage = ({ data: { page: {
  html,
  frontmatter: { title, image, bakeList }
}} }) => {

  return (
    <Page className='codingasbaking'>
      <SEO title="Coding as Baking | Rapi Castillo" />
      <div className='content'>
        
        <div className='featured-image' style={{backgroundImage: `url(${image})`}}>
          <h1>{title}</h1>
        </div>
        
        <div className='main-content'>
            <div className='content-area-container'>
              <div className='content-area' dangerouslySetInnerHTML={{__html: html}}></div>
            </div>
            <BakeList list={bakeList}/>
          </div>
      </div>
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
            image
            bakeList {
              name
              image
              url
            }
        }
      }
    }
      
`;