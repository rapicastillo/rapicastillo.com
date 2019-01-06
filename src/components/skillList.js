import React from 'react'

import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import { FaDownload } from 'react-icons/fa';
import '../styles/components/skillList.scss';

class SkillList extends React.Component {

  constructor(props) {
    super(props);
  }

  render = () => (
    <div className={'skill-list'}>
      {this.props.label && (<h3>{this.props.label}</h3>) }
      <ul>
        {this.props.skills && this.props.skills.map(item => (<li className='skill-item' name={item}>{item}</li>))}
      </ul>
    </div>
  );
}

SkillList.propTypes = {
    label: PropTypes.string,
}

SkillList.defaults = {
  label: ""
}
export default SkillList;
