import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/page'
import SEO from '../components/seo'
import WorkList from '../components/workList';

import '../styles/work.scss';

const WorkPage = ({ data: { page: {
    html,
    frontmatter: { title, image ,
      workList
    }
  }} }) => {
    console.log(workList);
    return (
      <Page className={'work'}>
        <SEO title="Page two" />
        <div className='content'>
          
          <div className='featured-image' style={{backgroundImage: `url(${image})`}}>
          <h1>{title}</h1>
          </div>

          <div className='main-content'>
            <div className='content-area-container'>
              <div className='content-area' dangerouslySetInnerHTML={{__html: html}}></div>
              <div>
                <Link to='/' className={'button'}>Go to Projects Page</Link>
              </div>
            </div>
            <WorkList list={workList} />
          </div>
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
            workList {
              title
              url
              image
              date(formatString: "MMM YYYY")
              endDate(formatString: "MMM YYYY")
              annotation
              skills
            }
        }
      }
    }
      
`;