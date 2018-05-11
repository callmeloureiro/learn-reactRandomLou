import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Page from '../../components/Page';
import UserList from '../../components/UserList';

import './main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userTicketsData: [],
      loading: false
    }
  }

  componentDidMount() {
    this.requestUser();;
  }

  clearUsers = () => {
    this.setState({
      userTicketsData: []
    })
  }

  requestUser = () => {
    this.setState({
      loading: true
    });

    fetch('https://randomuser.me/api/')
      .then(response => {
        return response.json();
      })
      .then(res => {
        const data = res.results[0];
        const tickets = this.state.userTicketsData.slice();
        tickets.unshift(data);
        this.setState({
          userTicketsData: tickets
        })
      })
      .finally(() => {
        this.setState({
          loading: false
        })
      });
  }

  generate = () => {
    if (this.state.userTicketsData.length) {
      return (
        <ul className="ticketsList">
          <UserList
            data = {this.state.userTicketsData}
          />
        </ul>
      );
    }
    return <div>Please generate user</div>
  }

  render() {
    const userTicket = this.generate();
    const isLoading = this.state.loading;

    return(
      <div>
        <Header />
        <Page>
          <div className="actionsButtons">
            <button
              onClick={this.requestUser}
              disabled={isLoading ? 'disabled' : ''}
            >
              Random User
              {isLoading && 
                <i class="fa fa-spinner fa-spin"></i>
              }
            </button>
            <button onClick={this.clearUsers}>Clear List</button>
          </div>

          <div className="usersTicketsContainer">
            {userTicket}
          </div>
        </Page>
        <Footer />
      </div>
    );
  }
}

export default App;
