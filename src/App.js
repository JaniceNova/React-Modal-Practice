import React, { Component } from 'react';
import NavBar from './component/NavBar'
import Register from './component/Register'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar > 
         <Register />
       </NavBar>
      
      </div>
    );
  }
}

export default App;
