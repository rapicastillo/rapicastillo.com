import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { FaDownload } from 'react-icons/fa';

const Header = (full = false) => (
  <header className={'header'}>
    <div className={'viewport'}>
      <div className={'logo'}></div>
      <div className={'shareables'}>
        <a href='/files/rapiresume.pdf' target='_blank'><FaDownload /></a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
