import React from 'react'

import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import moment from 'moment';

import SkillList from './skillList';
import { FaDownload } from 'react-icons/fa';
import '../styles/components/workList.scss';


class WorkList extends React.Component {

  constructor(props) {
    super(props);
  }

  render = () => (
    <div className={'work-list'}>
      <ul>
        {this.props.list.map(item => (
            <li className='work-item'>
                <div className={'work-image'} style={{backgroundImage: `url(${item.image})`}}><a href={item.url}></a></div>
                <div className={'details'}>
                    <h3><a href={item.url}>{item.title}</a></h3>
                    <div className={'dates'}>
                        <span>{item.date} &mdash; { item.endDate ? moment(new Date(item.endDate)).format("MMM YYYY") : 'Present'}</span>
                    </div>
                    <SkillList skills={item.skills}/>
                </div>
            </li>
        ))}
      </ul>
    </div>
  );
}

WorkList.propTypes = {
}

WorkList.defaults = {
}
export default WorkList;
