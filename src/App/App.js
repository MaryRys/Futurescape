import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import firebase from 'firebase/app';
import 'firebase/auth';

import Auth from '../components/Auth/Auth';

import connection from '../helpers/data/connection';

class App extends Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    connection();
  }

  // this.removeListener = firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       this.setState({
  //         authed: true,
  //       });
  //     } else {
  //       this.setState({
  //         authed: false,
  //       });
  //     }
  //   });
  //
  // componentWillUnmount() {
  //   this.removeListener();
  // }


    isAuthenticated = (username) => {
      this.setState({ authed: true });
    }

    render() {
      return (
      <div className="App">
       <h1>App</h1>

       <Auth isAuthenticated={this.isAuthenticated}/>
      </div>
      );
    }
}

export default App;
