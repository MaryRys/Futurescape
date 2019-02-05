import React from 'react';
import PropTypes from 'prop-types';
import './AllTriumphs.scss';
import TriumphItem from '../TriumphItem/TriumphItem';
import triumphsShape from '../../helpers/propz/triumphsShape';

class AllTriumphs extends React.Component {
  static propTypes ={
    triumphs: PropTypes.arrayOf(triumphsShape),
  }

  render() {
    const { triumphs, createFeaturedEvent } = this.props;
    const TriumphItemComponents = triumphs.map(triumph => (
    <TriumphItem
    triumph={triumph}
    status='general'
    key={triumph.id}
    createFeaturedEvent={createFeaturedEvent}
    />
    ));
    return (
    <div className="Triumphs col">
    <h3>Triumphs</h3>
    { TriumphItemComponents }
    </div>
    );
  }
}

export default AllTriumphs;
