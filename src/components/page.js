import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import '../styles/page.scss'

const Page = ({ children, showHeader = true, fullHeader = false, bgImage, className = '', style= {}}) => (
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
      <div className={`page ${className} ${showHeader ? 'page-with-header' : ''}`} style={{ backgroundImage: bgImage ? `url(${bgImage})` : 'none' , ...style}}>
        {showHeader && (<Header siteTitle={data.site.siteMetadata.title} full={fullHeader} />)}
        <div className='content-container'>
          {children}
        </div>
        <footer>
          <div className='name-icon'>
            © {new Date().getFullYear()}, Rapi Castillo &bull; Built with{` `}<a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
          <div className='icon-credit'>
            <div>Croissant Icon made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
          </div>
        </footer>
      </div>
    )}
  />
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
