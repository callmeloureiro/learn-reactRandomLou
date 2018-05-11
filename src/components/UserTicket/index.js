import React from 'react';

import './UserTicket.css';

class UserTicket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayData: "name"
    };
  }

  getIcons = () => {
    const sel = this.state.displayData;
    return (
      <ul className="iconsContainer">
        <li onClick={this.handleClick} className={"name fa fa-user-circle " + (sel === 'name' ? 'selected' : '')}></li>
        <li onClick={this.handleClick} className={"dob fa fa-calendar " + (sel === 'dob' ? 'selected' : '')}></li>
        <li onClick={this.handleClick} className={"location fa fa-globe " + (sel === 'location' ? 'selected' : '')}></li>
        <li onClick={this.handleClick} className={"contact fa fa-envelope " + (sel === 'contact' ? 'selected' : '')}></li>
      </ul>
    );
  }

  getDisplayData() {
    const data = this.props.data;
    const key = this.state.displayData;
    switch (key) {
      case "name":
        return (
          <div className="name">
            <div className="ticket__title">
              Name:
            </div>
            <div>
              {data.name.first + ' ' + data.name.last}
            </div>
          </div>
        );
      case "dob":
        return (
          <div className="dob">
            <div className="ticket__title">
              Birthday:
            </div>
            <div>
              {data.dob}
            </div>
          </div>
        );
      case "location":
        return (
          <div className="location">
            <div className="ticket__title">
              Location:
            </div>
            <div>
              {data.location.street + ', ' + data.location.city + ', ' + data.location.state}
            </div>
          </div>
        );
      case "contact":
        return (
          <div className="contact">
            <div className="ticket__title">
              Contact Information:
            </div>
            <div>
              E-Mail: {data.email}
            </div>
            <div>
              Phone: {data.phone}
            </div>
            <div>
              Mobile: {data.cell}
            </div>
          </div>
        );
      default:
        return (
          <div>
            ERROR!!!
          </div>
        );
    }
  }

  handleClick = (e) => {
    const key = e.currentTarget.className.split(' ')[0];
    this.setState({
      displayData: key
    })
  }

  render() {
    const data = this.props.data;
    const icons = this.getIcons();
    const displayData = this.getDisplayData();

    return (
      <div className="userContainer">
        <div className="avatarContainer">
          <picture>
            <img className="picContainer" src={data.picture.large} alt="img" />
          </picture>
          <div className="controlsContainer">
            {icons}
          </div>
        </div>

        <div className="displayDataContainer">
          {displayData}
        </div>
      </div>
    );
  }
}

export default UserTicket;