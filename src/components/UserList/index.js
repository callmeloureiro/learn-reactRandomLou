import React from 'react';

import UserTicket from '../UserTicket';

import './UserList.css';

class UserList extends React.Component {
  render() {
    return this.props.data.map((ticketData, index) => {
      return (
        <li key={index}>
          <UserTicket data={ticketData} />
        </li>
      )
    });
  }
}

export default UserList;