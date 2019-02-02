import React from 'react';
import './TriumphItem.scss';

class TriumphsItem extends React.Component {
  render() {
    const { triumph, status } = this.props;
    const addCompleteDate = () => {
      if (status === 'completed') {
        return <p>{triumph.completedDate}</p>;
      }
      return '';
    };

    const addButtons = () => {
      if (status === 'general') {
        return <button className="btn btn-light">Track</button>;
      }
      return '';
    };

    const getComponentClass = () => {
      switch (this.props.status) {
        case 'general':
          return 'generalTriumphsItem';
        case 'completed':
          return 'completedTriumphsItem';
        default:
          return '';
      }
    };

    return (
      <div className={getComponentClass()}>
        <div className="container">
          <div className="row">
          <img src={triumph.icon} alt="triumphImage"></img>
          <div className="col">
              <h4>{triumph.name}</h4>
              <p className="description">{triumph.description}</p>
              {addCompleteDate()}
            </div>
          </div>
          {/* <button className="btn btn-light">Track</button> */}
          {addButtons()}
        </div>
      </div>

    );
  }
}

export default TriumphsItem;
