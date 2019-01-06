import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/page'
import SEO from '../components/seo'
import '../styles/index.scss';
import { FaDownload } from 'react-icons/fa';


const IndexPage = () => (
  <Page className='index' showHeader={false} >
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className='content'>
      <div className='spiel'>
        <h1>Hi! I'm Rapi</h1>
        <p>I'm a tech worker, community organizer, and amateur baker based in New York.<br/>
          In my work, I always aim to create something beautiful and sustainable, give joy, and build meaningful relationships</p>
        <Link className={'button'} to="/about/" style={{marginTop: 10 }}>Read more</Link>
        <p><a className={'download'} target='_blank' href='/files/rapiresume.pdf'><FaDownload /> Download my Resume</a></p>
      </div>
    </div>
  </Page>
)

export default IndexPage;
