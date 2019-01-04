import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/page'
import SEO from '../components/seo'
import '../styles/index.scss';
import { FaDownload, FaBread } from 'react-icons/fa';

//Hi! I'm Rapi and I code as I bake. My goal in both my tech work and bakes is to always create something beautiful and sustaining, give joy, and to build relationships
const IndexPage = () => (
  <Page showHeader={false} bgImage={'/images/bake.jpg'}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className='content'>
      <div className='spiel'>
        <h1>Code as bake</h1>
        <p>Lorem Ipsum</p>
        <Link className={'button'} to="/codeasbake/" style={{marginTop: 10 }}>Read more</Link>
        <p><a className={'download'} href='/files/rapiresume.pdf'><FaDownload /> Download my Resume</a></p>
      </div>
    </div>
  </Page>
)

export default IndexPage
