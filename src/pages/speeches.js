import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/page'
import SEO from '../components/seo'
import SpeechList from '../components/speechList';
import '../styles/speeches.scss';

const SpeechesPage = ({ data: { page: {
    html,
    frontmatter: { title, image, speechList }
  }} }) => {
    console.log(speechList)
    return (
      <Page className={'speeches'}>
        <SEO title="Speeches | Rapi Castillo" />
        <div className='content'>
          <div className='featured-image' style={{backgroundImage: `url(${image})`}}>
            <h1>{title}</h1>
          </div>
          <div className='main-content'>
            <div className='content-area-container'>
              <div className='content-area' dangerouslySetInnerHTML={{__html: html}}></div>
              <div>
                <Link to='/media/' className={'button'}>Go to In the News</Link>
              </div>
            </div>
            <SpeechList list={speechList}/>
          </div>
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
            speechList {
              title
              url
              image
              date(formatString: "MMM YYYY")
              annotation
            }
        }
      }
    }
      
`;