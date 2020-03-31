import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    console.log(event.target.value)
    this.setState( {filters: {type: `${event.target.value}`}})
  }

  onAdoptPet = (id) => {
    console.log("You hit adopt pet")
    console.log(id)
    let newPetArray = this.state.pets.map(pet => {
      if(pet.id === id){
        pet.isAdopted = true
      }
      return pet
    })

    this.setState({pet: newPetArray})
  }


  onFindPetsClick = () => {
    let url = "/api/pets"
    if (this.state.filters.type === "dog") {
      url = "/api/pets?type=dog"
    } else if (this.state.filters.type === "cat") {
      url = "/api/pets?type=cat"
  } else if (this.state.filters.type === "micropig") {
      url = "/api/pets?type=micropig"
  }

    console.log("You hit onFindPetsClick in App.js")
    fetch(url)
      .then(resp => resp.json())
      .then(animals => {
        this.setState( {pets: animals})
      })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filterChange = {this.onChangeType} findPet={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets= {this.state.pets} adopt= {this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
