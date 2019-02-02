import React from 'react';
import PropTypes from 'prop-types';
import TriumphItem from '../TriumphItem/TriumphItem';
import './FeaturedTriumph.scss';
import triumphsShape from '../../helpers/propz/triumphsShape';

class FeaturedTriumph extends React.Component {
  static propTypes ={
    triumphs: PropTypes.arrayOf(triumphsShape),
  }

  render() {
    const { featuredTriumph, deleteFeaturedTriumph } = this.props;
    const displayTriumph = () => {
      if (featuredTriumph) {
        return (
            <TriumphItem
            triumph={featuredTriumph}
            status='featured'
            key={featuredTriumph.id}
            deleteFeaturedTriumph={deleteFeaturedTriumph}
            />
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
