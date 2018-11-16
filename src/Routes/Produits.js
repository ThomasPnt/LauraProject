import React, {Component} from 'react'
import Title from '../Components/Title';
import SquareContainer from '../Components/SquareContainer';

export class Produits extends Component {
  render(){
    const display = [{
      title : 'Crème de jour',
    },{
      title : 'Crème de nuit',
    },{
      title : 'Démaquillant',
    },{
      title : 'Lait corporel',
    },{
      title : 'Produits de maquillage',
    }]

    return(
      <div className="Produits">
        <Title>
          Produits
        </Title>
        <SquareContainer items={display} />
      </div>
    )
  }
}

export default Produits;