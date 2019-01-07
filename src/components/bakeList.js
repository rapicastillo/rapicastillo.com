import React from 'react'
import '../styles/components/bakeList.scss';


class BakeList extends React.Component {

  constructor(props) {
    super(props);
  }

  render = () => (
    <div className={'bake-list'}>
      <ul>
        {this.props.list.map(item => (
            <li className='bake-item'>
                <div className={'bake-image'} style={{backgroundImage: `url(${item.image})`}}>
                  <a href={item.url}></a>
                </div>
                <div className={'details'}>
                    <h3><a href={item.url}>{item.name}</a></h3>
                </div>
            </li>
        ))}
      </ul>
    </div>
  );
}

BakeList.propTypes = {
}

BakeList.defaults = {
}
export default BakeList;
