import React, {Component} from 'react'
import Logo1 from '../Assets/pastille-001.svg';
import Logo2 from '../Assets/pastille-002.svg';
import Logo3 from '../Assets/pastille-003.svg';
import Logo4 from '../Assets/pastille-004.svg';
import Logo5 from '../Assets/pastille-005.svg';
import Logo6 from '../Assets/pastille-006.svg';
import Logo7 from '../Assets/pastille-007.svg';
import Logo8 from '../Assets/pastille-008.svg';
import '../App.css';

export default class MiniLogo extends Component {
  selectImage = () => {
    const {logo} = this.props;
    switch (logo) {
      case 1:
      return <img src={Logo1} alt={logo}/>
        break;
      case 2:
      return <img src={Logo2} alt={logo}/>
        break;
      case 3:
      return <img src={Logo3} alt={logo}/>
        break;
      case 4:
      return <img src={Logo4} alt={logo}/>
        break;
      case 5:
      return <img src={Logo5} alt={logo}/>
        break;
      case 6:
      return <img src={Logo6} alt={logo}/>
        break;
      case 7:
      return <img src={Logo7} alt={logo}/>
        break;
      case 8:
      return <img src={Logo8} alt={logo}/>
        break;
      default:
        break;
    }
  }
  
  render(){
    const {left, right, top, bottom} = this.props;
    return(
      <div className="MiniLogo" style={{left: left, right: right, bottom: bottom, top: top}}>
        {this.selectImage()}
      </div>
    )
  }
}