import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import firebase from 'firebase/app';
import 'firebase/auth';

import connection from '../helpers/data/connection';

import MyNavbar from '../components/MyNavbar/MyNavbar';
import authRequests from '../helpers/data/authRequests';
import Auth from '../components/Auth/Auth';
import AllTriumphs from '../components/AllTriumphs/AllTriumphs';
import getAllTriumphs from '../helpers/data/triumphRequests';

class App extends Component {
  state = {
    authed: false,
    triumphs: [],
  }

  componentDidMount() {
    connection();

    getAllTriumphs()
      .then((triumphs) => {
        this.setState({ triumphs });
      })
      .catch(err => console.error('error with triumphs GET', err));

    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
        });
      } else {
        this.setState({
          authed: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

    isAuthenticated = (username) => {
      this.setState({ authed: true });
    }

    render() {
      const { authed } = this.state;
      const logoutClickEvent = () => {
        authRequests.logoutUser();
        this.setState({ authed: false });
      };

      if (!authed) {
        return (
        <div className="App">
            <MyNavbar isAuthed={authed} logoutClickEvent={logoutClickEvent}/>
            <Auth isAuthenticated={this.isAuthenticated}/>
        </div>
        );
      }
      return (
      <div className="App">
      <MyNavbar isAuthed={authed} logoutClickEvent={logoutClickEvent} />
      <div className="row">
      <AllTriumphs triumphs={this.state.triumphs}/>
          <h1>App</h1>
          <p>You are authenticated</p>
      </div>
      </div>
      );
    }
}

export default App;
