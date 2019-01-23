import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>App</h1>
       <button className='btn btn-danger'>HELP ME</button>
       <Button
          tag="a"
          color="success"
          size="large"
          href="http://reactstrap.github.io"
          target="_blank"
      >
          View Reactstrap Docs
      </Button>
      </div>
    );
  }
}

export default App;
