import React, {Component} from 'react'
import './Footer.css';
import Logo from '../Assets/logo_facebook.png';

export class Footer extends Component {
  render(){
    return(
      <div className="Footer">
        <div className="content">
          <div className="text">
            N’hésitez pas à me contacter au 0471/441 440 que ce soit : pour des conseils mode , pour des soins divers (pédicures,manicures,visage,corporels,...), pour des produits tels que crêmes de jour, laits, pour vous faire maquiller ou coiffer 
          </div>
          <div className="text">
            Je me déplace à votre domicile sans supplément
          </div>
          <a href="https://www.facebook.com/justabeauty.esthetiquepedicure.7" target='_blank' rel="noopener noreferrer" alt="to facebook">
            <img className="logo" src={Logo} alt="logo"/>
          </a>
        </div>
      </div>
    )
  }
}

export default Footer;