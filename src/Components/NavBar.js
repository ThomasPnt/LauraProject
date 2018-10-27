import React, {Component} from 'react'
import './NavBar.css';
import { NavLink } from 'react-router-dom';

export class NavBar extends Component {
  render(){
    return( 
      <div className="NavBar">
        <NavLink className="link" activeClassName="active" to="/home">
          <span>
            Acceuil
          </span>
        </NavLink>
        <NavLink className="link" activeClassName="active" to="/mode">
          <span>
            Mode
          </span>
        </NavLink>
        <NavLink className="link" activeClassName="active" to="/maquillage">
          <span>
            Maquillage
          </span>
        </NavLink>
        <NavLink className="link" activeClassName="active" to="/soins">
          <span>
            Soins
          </span>
        </NavLink>
        <NavLink className="link" activeClassName="active" to="/produit">
          <span>
            Produit
          </span>
        </NavLink>
        <NavLink className="link" activeClassName="active" to="/coiffure">
          <span>
            Coiffure
          </span>
        </NavLink>
        <NavLink className="link" activeClassName="active" to="/contact">
          <span>
            Contact
          </span>
        </NavLink>
      </div>
    )
  }
}

export default NavBar;