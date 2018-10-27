import React, {Component} from 'react'
import './SquareContainer.css'
import SquareItem from './SquareItem';

export default class SquareContainer extends Component {
  render(){
    const {items} = this.props;
    return(
      <div className="SquareContainer">
        {items.map((item , key) => (
          <div key={key} className="SquareContainer-item">
            <SquareItem item={item}/>
          </div>
        ))}
      </div>
    )
  }
}