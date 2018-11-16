import React, {Component} from 'react'
import Title from '../Components/Title';
import SquareContainer from '../Components/SquareContainer';

export class Coiffure extends Component {
  render(){
    const display = [{
      title : 'Chignon',
      price : 20,
      image : 'hair-bun'
    },{
      title : 'Coiffure de jour',
      price : 20,
      image : 'hair-day',
    },{
      title : 'Coiffure de soirée',
      price : 20,
      image : 'hair-night'
    },{
      title : 'Tresses',
      price : 20,
      image : 'tresse'
    },{
      title : 'Coiffure de mariage',
      price : 40,
      image : 'hair-mariage'
    },{
      title : 'Coiffure de fête',
      price : 40,
      image : 'hair-fete'
    }]

    return(
      <div className="Coiffure">
        <Title>
          Coiffure
        </Title>
        <SquareContainer items={display} />
      </div>
    )
  }
}

export default Coiffure;