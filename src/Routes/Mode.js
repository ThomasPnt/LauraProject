import React, {Component} from 'react'
import Title from '../Components/Title';
import SquareContainer from '../Components/SquareContainer';

export class Mode extends Component {
  render(){
    const display = [{
      title : 'Conseils Tendance',
      price : 20,
      description : 'Je viens chez vous pour vous donner des conseils sur votre look',
      image: 'conseil-tendance',
    },{
      title : 'Relooking',
      price : 50,
      description : 'Je vous relook',
      image: 'relooking',
    },{
      title : 'Accompagnement Shopping',
      price : 100,
      description : 'je vous accompagne et vous conseil',
      image: 'shopping',
    }]

    return(
      <div className="Mode">
        <Title>
          Mode
        </Title>
        <SquareContainer items={display} />
      </div>
    )
  }
}

export default Mode;