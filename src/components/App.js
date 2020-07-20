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

  onChangeType = filter => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: filter
      }
    })
  }

  fetchPets = () => {
    let type = this.state.filters.type
    let url 
    switch (type) {
      case "all":
        url = "/api/pets"
        break
      default:
        url = "/api/pets?type=" + type
    }
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          pets: data
        })
      })
  }

  onAdoptPet = petID => {
    const index = this.state.pets.findIndex(pet => pet.id === petID)
    const pet = this.state.pets.find(pet => pet.id === petID)
    pet.isAdopted = true
    let newPets = this.state.pets
    newPets[index] = pet
    this.setState({
      pets: newPets
    })
  }

  render() {
    console.log(this.state.pets)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                onChangeType={this.onChangeType}
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
