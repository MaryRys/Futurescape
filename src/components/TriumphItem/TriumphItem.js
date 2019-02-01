import React from 'react';
import './TriumphItem.scss';

class TriumphsItem extends React.Component {
  render() {
    const { triumph } = this.props;
    return (
      <div className="triumphsItem">
        <div className="container">
          <div className="row">
          <img src={triumph.icon} alt="triumphImage"></img>
          <div className="col">
              <h4>{triumph.name}</h4>
              <p className="description">{triumph.description}</p>
            </div>
          </div>
          <button className="btn btn-light">Track</button>
        </div>
      </div>

    );
  }
}

export default TriumphsItem;
