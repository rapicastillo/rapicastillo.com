import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import '../styles/page.scss'

const Page = ({ children, showHeader = true, fullHeader = false, bgImage }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={`page ${showHeader && 'page-with-header'}`} style={{ backgroundImage: bgImage ? `url(${bgImage})` : 'none' }}>
        {showHeader && (<Header siteTitle={data.site.siteMetadata.title} full={fullHeader} />)}
        <div className='content-container'>
          {children}
        </div>
        <footer>
          © {new Date().getFullYear()}, Rapi Castillo &bull; Built with{` `}<a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )}
  />
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
