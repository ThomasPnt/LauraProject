import React, {Component} from 'react'
import './SquareItem.css'

export class SquareItem extends Component {
  render(){
    const {item} = this.props;    
    return(
      <div className="SquareItem" id={item.image}>
        <div className="SquareItem-Price-Container">
          <span className="SquareItem-Price">
            {item.price} €
          </span>
        </div>
        <div className="SquareItem-Title">
          <div className="SquareItem-Span">
            {item.title}
            <div className="SquareItem-Slide">
              {item.description}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SquareItem;