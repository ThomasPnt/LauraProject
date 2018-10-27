import React, {Component} from 'react'
import "./Title.css"

export class Title extends Component {
  render(){
    const {children} = this.props;
    return(
      <div className="Title">
        <div className="Title-Text">
          {children}
        </div>
      </div>
    )
  }
}

export default Title;