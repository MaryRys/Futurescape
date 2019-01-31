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
import CompletedTriumphs from '../components/CompletedTriumphs/CompletedTriumphs';
import FeaturedTriumph from '../components/FeaturedTriumph/FeaturedTriumph';
import InProgressTriumph from '../components/InProgressTriumph/InProgressTriumph';

// import triumphRequests from '../helpers/data/triumphRequests';
import smashRequests from '../helpers/data/smashRequests';

class App extends Component {
  state = {
    authed: false,
    triumphs: [],
  }

  getAllTriumphs() {
    smashRequests.getAllTriumphsWithUser()
      .then((triumphs) => {
        this.setState({ triumphs });
        console.log(triumphs);
      })
      .catch(err => console.error('error with triumphs GET', err));
  }

  componentDidMount() {
    connection();
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
        });
        this.getAllTriumphs();
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
      const { authed, triumphs } = this.state;
      const logoutClickEvent = () => {
        authRequests.logoutUser();
        this.setState({ authed: false });
      };

      // console.log(triumphs);

      const featuredTriumph = triumphs.find(x => x.isFeatured);
      console.log('featuredTriumph', featuredTriumph);
      const completedTriumphs = triumphs.filter(x => x.isCompleted);
      // inProgressTriumph may need tweaking but this is a placeholder
      const inProgressTriumph = triumphs.filter(x => x.isInProgress);

      // console.log(featuredTriumph);

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
      {/* the components below need to be tested, their values are placeholders */}
      <div className="column">
        <div className="container">
          <FeaturedTriumph featuredTriumph={featuredTriumph}/>
          <InProgressTriumph inProgressTriumph={inProgressTriumph}/>
          <CompletedTriumphs completedTriumphs={completedTriumphs}/>
        </div>
      </div>
        <AllTriumphs triumphs={this.state.triumphs}/>
      </div>
      </div>
      );
    }
}

export default App;
