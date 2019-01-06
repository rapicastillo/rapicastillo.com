import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/page'
import SEO from '../components/seo'
import '../styles/index.scss';
import { FaDownload } from 'react-icons/fa';


const IndexPage = () => (
  <Page className='index' bgImage={'/images/bake.jpg'} showHeader={false}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className='content'>
      <div className='spiel'>
        <h1>Rapi Castillo</h1>
        <p>Hi! I'm Rapi and I code as I bake.<br/>
          My goal in both my tech work and bakes is to always create something beautiful and sustainable, give joy, and build relationships</p>
        <Link className={'button'} to="/codingasbaking/" style={{marginTop: 10 }}>Read more</Link>
        <p><a className={'download'} target='_blank' href='/files/rapiresume.pdf'><FaDownload /> Download my Resume</a></p>
      </div>
    </div>
  </Page>
)

export default IndexPage;
