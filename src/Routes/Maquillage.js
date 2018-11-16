import React, {Component} from 'react'
import Title from '../Components/Title';
import SquareContainer from '../Components/SquareContainer';

export class Maquillage extends Component {
  render(){
    const display = [{
      title : 'Maquillage de jour',
      price : 20,
      description : 'description',
      image : 'makeup-day'
    },{
      title : 'Maquillage de soirée',
      price : 20,
      description : 'description',
    },{
      title : 'Maquillage de mariage',
      price : 40,
      description : 'description',
    },{
      title : 'Maquillage de fête',
      price : 40,
      description : 'description',
    }]

    return(
      <div className="Maquillage">
        <Title>
          Maquillage
        </Title>
        <SquareContainer items={display} />
      </div>
    )
  }
}

export default Maquillage;