import React, {Component} from 'react'
import './SquareItem.css'

export class SquareItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      more: false
    }
  }

  render(){
    const {item} = this.props;    
    const {more} = this.state;
    return(
      <>
        <div className="SquareItem" id={item.image} onClick={item.more ? () => this.setState({more : !more}) : null}>
          {item.price && 
            <div className="SquareItem-Price-Container">
              <span className="SquareItem-Price">
                {item.price} €
              </span>
            </div>
          }
          {item.more && 
            <div className="SquareItem-Price-Container">
              <span className="SquareItem-Price">
                Voir prix
              </span>
            </div>
          }
          <div className="SquareItem-Title" id={more ? 'active' : 'unactive'} >
            <div className="SquareItem-Span">
              {item.title}
              <div className="SquareItem-Slide">
                {item.description}
              </div>
            </div>
          </div>
          <div className="SquareItem-More" id={more && 'display'}>
            {item.more && more && item.more.map((el) => (
              <div className="item">
                <span className='item-text'>{el.text}</span>
                <span className='item-price'>{el.price}€</span>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }
}

export default SquareItem;