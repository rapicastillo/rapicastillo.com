import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/page'
import SEO from '../components/seo'
import NewsList from '../components/newsList';
import '../styles/media.scss';
const MediaPage = ({ data: { page: {
    html,
    frontmatter: { title, image, newsList }
  }} }) => {
    console.log(newsList)
    return (
      <Page className={'media'}>
        <SEO title="Media | Rapi Castillo" />
        <div className='content'>
          <div className='featured-image' style={{backgroundImage: `url(${image})`}}>
            <h1>{title}</h1>
          </div>
          <div className='main-content'>
            <div className='content-area-container'>
              <div className='content-area' dangerouslySetInnerHTML={{__html: html}}></div>
              <div>
                <Link to='/speeches/' className={'button'}>Past Speaking Engagements</Link>
              </div>
            </div>
            <NewsList list={newsList} />
          </div>
        </div>
      </Page>
    )
}


export default MediaPage;

export const pageQuery = graphql`
    query MediaPage {
      page: markdownRemark(frontmatter: {uniq: { eq: "news" }}) {
        html
        frontmatter {
            title
            image
            newsList {
              title
              url
              image
              annotation
              date(formatString: "MMM YYYY")
              publisher {
                name
                image
              }
            }
        }
      }
    }
      
`;