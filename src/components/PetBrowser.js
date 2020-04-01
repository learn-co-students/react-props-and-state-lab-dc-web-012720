import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    console.log(this.props)
    return (
    <div className="ui cards">
      {this.props.pets.map( pet => <Pet petObj = {pet} key = {pet.id} adopt = {this.props.adopt}/> )}
      
      </div>)
  }
}

export default PetBrowser
