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

  toggleMenu = () => {
    if (this.state.open) {
      this.setState({ open: false });
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
      this.setState({ open: true });
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
          className={this.state.open ? 'open' : ''}  
          onClick={this.toggleMenu.bind(this)}
        >
          <ul>
            <li><Link to='/about/'>About</Link></li>
            <li><Link to='/projects/'>Work</Link></li>
            <li><Link to='/media/'>Media Appearance</Link></li>
            <li><Link to='/codingasbaking/'>Code as Bake</Link></li>
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
