import React from 'react'

import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import moment from 'moment';

import '../styles/components/speechList.scss';


class SpeechList extends React.Component {

  constructor(props) {
    super(props);
    console.log("MOMENT", props);
  }

  render = () => (
    <div className={'speech-list'}>
      <ul>
        {this.props.list.map((item) => (
            <li className='speech-item'>
                <div className={'work-image'} style={{backgroundImage: `url(${item.image})`}}>
                <a href={item.url}></a>
                </div>
                <div className={'details'}>
                    <h3><a href={item.url}>{item.title}</a></h3>
                    <div className={'date-container'}>
                        <span className='date'>{item.date}</span>
                    </div>
                    <div className={'annotation'}>
                        <p>{item.annotation}</p>
                    </div>
                </div>
            </li>
        ))}
      </ul>
    </div>
  );
}

SpeechList.propTypes = {
}

SpeechList.defaults = {
}
export default SpeechList;
