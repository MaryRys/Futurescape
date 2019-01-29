import React from 'react';

class TriumphsItem extends React.Component {
  render() {
    const { triumph } = this.props;
    return (
      <div className="triumphsItem">
        <div className="container">
        <h1>triumphs</h1>
          <div className="row">
            <h3>{triumph.name}</h3>
            <img src={triumph.icon} alt="triumphImage"></img>
            <button className="btn btn-light">Track</button>
          </div>
        </div>
      </div>

    );
  }
}

export default TriumphsItem;
