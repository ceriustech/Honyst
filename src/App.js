import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import './App.css';
import Navigation from './Navigation/Navigation';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Navigation />
      
      </div>
    ) 
  }
}

export default App;
