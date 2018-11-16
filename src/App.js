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
import Title from './Assets/logo-seul.svg';
import MiniLogo from './Components/MiniLogo';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <div className='header'>
              <img src={Title} className="Logo"/>
              <NavBar />
            </div>
            <div className="Main">
              <MiniLogo logo={1} left={150} top={75} />
              <MiniLogo logo={4} left={40} top={250}/>            
              <MiniLogo logo={2} left={130} top={400}/>
              <MiniLogo logo={3} left={20} top={550}/>              
              <MiniLogo logo={7} right={150} top={100}/>
              <MiniLogo logo={6} right={75} top={250}/>
              <MiniLogo logo={5} right={125} top={450}/>            
              <MiniLogo logo={8} right={90} top={650}/>            
              <div className='container'>
                <Route path="/home" component={Acceuil} />
                {/* <Route path="/mode" component={Mode} /> */}
                <Route path="/maquillage" component={Maquillage} />
                <Route path="/soins" component={Soins} />
                <Route path="/produit" component={Produits} />
                <Route path="/coiffure" component={Coiffure} />
              </div>
            </div>
            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
