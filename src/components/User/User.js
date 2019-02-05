import React from 'react';
import './User.scss';

class User extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className='User'>
        <div className="row">
          <h1>{user.displayName}</h1>
          <img className="userIcon" src={user.bungieMembershipIcon} alt="userIcon"></img>
        </div>
      </div>
    );
  }
}

export default User;
