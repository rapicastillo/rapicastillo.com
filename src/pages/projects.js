import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/page'
import SEO from '../components/seo'
import ProjectList from '../components/projectList';

import '../styles/projects.scss';

const ProjectsPage = ({ data: { page: {
    html,
    frontmatter: { title, image ,
        projectList
    }
  }} }) => {

    return (
      <Page className={'projects'}>
        <SEO title="Select Works" />
        <div className='content'>
          
          <div className='featured-image' style={{backgroundImage: `url(${image})`}}>
          <h1>{title}</h1>
          </div>

          <div className='main-content'>
            <div className='content-area-container'>
              <div className='content-area' dangerouslySetInnerHTML={{__html: html}}></div>
              <div>
                <Link to='/work/' className={'button'}>Go to Work History</Link>
              </div>
            </div>
            <ProjectList list={projectList} />
          </div>
        </div>
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
            image
            projectList {
              title
              url
              image
              date(formatString: "MMM YYYY")
              annotation
              skills
            }
        }
      }
    }
      
`;