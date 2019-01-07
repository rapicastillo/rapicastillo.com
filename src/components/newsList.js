import React from 'react'

import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import moment from 'moment';

import '../styles/components/newsList.scss';


class NewsList extends React.Component {

  constructor(props) {
    super(props);
    console.log("MOMENT", moment);
  }

  render = () => (
    <div className={'news-list'}>
      <ul>
        {this.props.list.map((item) => (
            <li className='news-item'>
                <div className={'work-image'} style={{backgroundImage: `url(${item.image})`}}>
                <a href={item.url}></a>
                </div>
                <div className={'details'}>
                    <h3><a href={item.url}>{item.title}</a></h3>
                    <div className={'publisher-container'}>
                        <span className='publisher'>
                            <img src={item.publisher.image} className='publisher-img' />
                            <span className='date'>{item.date}</span>
                        </span>
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

NewsList.propTypes = {
}

NewsList.defaults = {
}
export default NewsList;
