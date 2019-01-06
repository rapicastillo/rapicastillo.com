import React from 'react'
// import { Link } from 'gatsby'
import { FaDownload } from 'react-icons/fa';

import Page from '../components/page'
import SEO from '../components/seo'
import SkillList from '../components/skillList';

import '../styles/about.scss';

const AboutPage = ({ data: { page: {
    html,
    frontmatter: { title, image, skillList: {expert, skilled, rusty, bakes} }
  }} }) => {
    
    console.log(expert, skilled, rusty, bakes);
    return (
      <Page className='about'>
        <SEO title="About Rapi | Rapi Castillo is a tech worker, community organizer, and amateur baker" />
        <div className='content'>
          <div className='featured-image' style={{backgroundImage: `url(${image})`}}>
            <h1>{title}</h1>
          </div>
          <div className='main-content'>
            <div className='left-area'>
              <div className='content-area' dangerouslySetInnerHTML={{__html: html}}></div>
              <div style={{ marginTop: 20, textAlign: 'left'}}>
               <p>
                 <a className={'button'} target='_blank' href='/files/rapiresume.pdf'><FaDownload /> Download my Resume</a>
                </p>
              </div>
            </div>
            <div className='right-area'>
              <h2>Skill History</h2>
              <SkillList label={'Expert'} skills={expert} />
              <SkillList label={'Skilled'} skills={skilled} />
              <SkillList label={'Prior Experience'} skills={rusty} />
              <SkillList label={'Bakes'} skills={bakes} />
            </div>
          </div>
        </div>
      </Page>
    )
}


export default AboutPage;

export const pageQuery = graphql`
    query AboutPage {
      page: markdownRemark(frontmatter: {uniq: { eq: "about" }}) {
        html
        frontmatter {
            title
            image
            skillList {
              expert
              skilled
              rusty
              bakes
            }
        }
      }
    }
      
`;