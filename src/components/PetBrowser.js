import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  getPets = () => {
    let arr = []
    this.props.pets.forEach(pet => {
      arr.push(<div className="ui cards"><Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet}/></div>)
    })
    return arr
  }
  
  render() {
    return this.getPets()
  }
}

export default PetBrowser
