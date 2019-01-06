import React from 'react'

import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import { FaDownload } from 'react-icons/fa';
import '../styles/components/header.scss';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  render = () => (
    <header className={'header'}>
      <div className={'viewport'}>
        <div className={'logo'}>
          <h1>
            <Link to="/">
              {/* <img alt='croissant' src='/images/croissant-64.png'/> */}
              <span>Rapi Castillo</span>
            </Link>
          </h1>
        </div>
        <nav 
          className={this.state.open && 'open'} 
          onClick={() => { this.setState({ open: !this.state.open })}}
        >
          <ul>
            <li><Link to='/about/'>About</Link></li>
            <li><Link to='/news/'>In the News</Link></li>
            <li><Link to='/speeches/'>Speeches</Link></li>
            <li><Link to='/projects/'>Projects</Link></li>
            <li><Link to='/work/'>Works</Link></li>
            <li><a rel="noopener noreferrer" href='/files/rapiresume.pdf' className='resume button' target='_blank'><FaDownload /> Download Resume</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
