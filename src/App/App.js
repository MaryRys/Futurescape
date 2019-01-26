import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
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

  render() {
    return (
      <div className="App">
       <h1>App</h1>

       <Auth />
      </div>
    );
  }
}

export default App;
