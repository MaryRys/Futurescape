import React from 'react';
import PropTypes from 'prop-types';
import triumphsShape from '../../helpers/propz/triumphsShape';
import TriumphItem from '../TriumphItem/TriumphItem';
import './CompletedTriumphs.scss';

class CompletedTriumphs extends React.Component {
  static propTypes ={
    triumphs: PropTypes.arrayOf(triumphsShape),
  }

  render() {
    const { completedTriumphs } = this.props;
    const displayCompletedTriumphs = completedTriumphs.map(triumph => (
      <TriumphItem
      triumph={triumph}
      status='completed'
      key={triumph.id}
      />
    ));
    return (
      <div className="completedTriumphs col">
        <h3>Completed</h3>
        {displayCompletedTriumphs}
      </div>
    );
  }
}

export default CompletedTriumphs;
