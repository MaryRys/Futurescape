import React from 'react';
import PropTypes from 'prop-types';
import triumphsShape from '../../helpers/propz/triumphsShape';
import './CompletedTriumphs.scss';

class CompletedTriumphs extends React.Component {
  static propTypes ={
    triumphs: PropTypes.arrayOf(triumphsShape),
  }

  render() {
    const { completedTriumphs } = this.props;
    const displayCompletedTriumphs = () => {
      if (completedTriumphs) {
        completedTriumphs.map(triumph => (
              <div className="completedTriumphsItem">
                 <div className="container">
                    <div className="row">
                        <img src={triumph.icon} alt="triumphImage"></img>
                      <div className="col">
                        <h4>{triumph.name}</h4>
                        <p className="description">{triumph.description}</p>
                      </div>
                    </div>
                  </div>
              </div>
        ));
      }
      return '';
    };
    return (
      <div className="completedTriumphs col">
        <h3>Completed</h3>
        {displayCompletedTriumphs}
      </div>
    );
  }
}

export default CompletedTriumphs;
