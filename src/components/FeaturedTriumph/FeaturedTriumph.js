import React from 'react';
import PropTypes from 'prop-types';
import './FeaturedTriumph.scss';
// import TriumphItem from '../TriumphItem/TriumphItem';
import triumphsShape from '../../helpers/propz/triumphsShape';

class FeaturedTriumph extends React.Component {
  static propTypes ={
    triumphs: PropTypes.arrayOf(triumphsShape),
  }

  render() {
    const { featuredTriumph } = this.props;
    const displayTriumph = () => {
      if (featuredTriumph) {
        return (
          <div className="featTriumphItem">
        <div className="container">
          <div className="row">
          <img src={featuredTriumph.icon} alt="triumphImage"></img>
          <div className="col">
              <h4>{featuredTriumph.name}</h4>
              <p className="description">{featuredTriumph.description}</p>
            </div>
          </div>
          <button className="btn btn-light">Untrack</button>
        </div>
      </div>
        );
      }
      return '';
    };
    return (
      <div className="Triumphs col">
        <h3>Featured</h3>
        { displayTriumph() }
      </div>
    );
  }
}

export default FeaturedTriumph;
