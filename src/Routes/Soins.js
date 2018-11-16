import React, {Component} from 'react'
import Title from '../Components/Title';
import SquareContainer from '../Components/SquareContainer';

export class Soins extends Component {
  render(){
    const display = [{
      title : 'Soin du visage',
      price : 20,
      description : 'description',
    },{
      title : 'Soin du corps',
      price : 20,
      description : 'description',
    },{
      title : 'épilation',
      description : 'description',
      image : 'epilation',
      more: [{
        text: 'sourcils',
        price: 7,
      },{
        text: 'levre supérieure',
        price: 5
      },{
        text: 'menton',
        price: 5
      },{
        text: 'demi-jambes',
        price: 15,
      },{
        text: 'jambe complète',
        price: 25,
      },{
        text: 'bikini simple',
        price: 10,
      },{
        text: 'aisselles',
        price: 7
      },{
        text: 'bras',
        price: 15,
      },{
        text: 'torse/dos',
        price: 20,
      }]
    },{
      title : 'Massages',
      price : 40,
      description : 'description',
    },{
      title : 'Pédicure médicale',
      price : 20,
      description : 'description',
    },{
      title : 'Manicure',
      price : 20,
      description : 'description',
    },{
      title : 'Pose vernis semi-permanent',
      price : 20,
      description : 'description',
    }]

    return(
      <div className="Soins">
        <Title>
          Soins
        </Title>
        <SquareContainer items={display} />
      </div>
    )
  }
}

export default Soins;