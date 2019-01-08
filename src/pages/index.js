import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/page'
import SEO from '../components/seo'
import '../styles/index.scss';
import { FaDownload } from 'react-icons/fa';


const IndexPage = () => (
  <Page className='index' showHeader={false} >
    <SEO title="Hi, I'm Rapi!" keywords={[`gatsby`, `application`, `react`]} />
    <div className='content'>
        <div className='images'>
          <ul>
            <li><a href='/projects/'><img src='/images/responsive.png'/></a></li>
            <li><a href='/speeches/'><img src='/images/social-care.png'/></a></li>
            <li><a href='/work/'><img src='/images/team.png'/></a></li>
            <li><a href='/codingasbaking/'><img src='/images/croissant-256.png'/></a></li>
          </ul>
        </div>
        <div className='spiel'>
          <h1>Hi! I'm Rapi</h1>
          <p>I'm a tech worker, community organizer, and amateur baker based in New York.<br/>
            In my work, I always aim to create sustainable solutions that empower people and build strong relationships.</p>
          <p className='cta'>
            <Link className={'button'} to="/about/" style={{marginTop: 10 }}>Read more</Link>
            <a href='mailto: hi@rapicastillo.com' style={{marginLeft: 10}}>or email me</a>
          </p>
          <p><a className={'download'} target='_blank' href='/files/rapiresume.pdf'><FaDownload /> Download my Resume</a></p>
        </div>
    </div>
    
  </Page>
)

export default IndexPage;
