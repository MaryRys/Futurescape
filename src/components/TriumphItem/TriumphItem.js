import React from 'react';
import './TriumphItem.scss';

import authRequests from '../../helpers/data/authRequests';

class TriumphsItem extends React.Component {
  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteFeaturedTriumph, triumph } = this.props;
    deleteFeaturedTriumph(triumph.userTriumphId);
  }

  addEvent = (e) => {
    e.preventDefault();
    const { createFeaturedEvent, triumph } = this.props;
    const newFeatured = {
      triumphId: triumph.id,
      isComplete: false,
      isFeatured: true,
      uid: authRequests.getCurrentUid(),
    };
    createFeaturedEvent(newFeatured);
  }

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
        return <button className="btn btn-light" onClick={this.addEvent}>Track</button>;
      }
      if (status === 'featured') {
        return (
          <div>
            <button className="btn btn-danger" onClick={this.deleteEvent}>delete</button>
            <button className="btn btn-light">Untrack</button>
          </div>
        );
      }
      return '';
    };

    const getComponentClass = () => {
      switch (this.props.status) {
        case 'general':
          return 'generalTriumphsItem';
        case 'completed':
          return 'completedTriumphsItem';
        case 'featured':
          return 'featuredTriumphsItem';
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
          {addButtons()}
        </div>
      </div>

    );
  }
}

export default TriumphsItem;
