import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Acceuil from './Routes/Acceuil';
import Soins from './Routes/Soins';
import Mode from './Routes/Mode';
import Maquillage from './Routes/Maquillage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Produits from './Routes/Produits';
import Coiffure from './Routes/Coiffure';

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
              {/* <Route path="/mode" component={Mode} /> */}
              <Route path="/maquillage" component={Maquillage} />
              <Route path="/soins" component={Soins} />
              <Route path="/produit" component={Produits} />
              <Route path="/coiffure" component={Coiffure} />
            </div>
            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
