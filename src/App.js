import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Acceuil from './Routes/Acceuil';
import Mode from './Routes/Mode';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <div className='header'>
              <h1 className="title">Just a beauty</h1>
              <NavBar />
            </div>
            <div className='container'>
              <Route path="/home" component={Acceuil} />
              <Route path="/mode" component={Mode} />
            </div>
            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
