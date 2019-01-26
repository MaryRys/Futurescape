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
    const { triumphs } = this.props;
    const TriumphItemComponents = triumphs.map(triumph => (
    <TriumphItem
    triumph={triumph}
    key={triumph.id}
    />
    ));
    return (
    <div className="Triumphs">
    {/* <div className="container"> */}
    <h3>Triumphs</h3>
    { TriumphItemComponents }
    </div>
    // </div>
    );
  }
}

export default AllTriumphs;
