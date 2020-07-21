import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

let URL = '/api/pets'

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

  onChangeType = (e) => {
    this.setState({
      filters: { type: e.target.value}

    })
  }

  onFindPetsClick = () => {
    {/* should fetch a list of pets using fetch() */}
    if(this.state.filters.type !== 'all'){
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(res => res.json())
      .then(data => {this.setState({pets: data})})
    }
    else if (this.state.filters.type === 'all'){
      fetch(URL)
      .then(res => res.json())
      .then(data => {
        this.setState({pets: data})
      })
     }
  }

  onAdoptPet = (id) => {
    {/* find the matching pet in state.pets and set the isAdopted property to true */}
    let newPets = this.state.pets
    let foundPet = this.state.pets.find(pet => pet.id === id)
      if(foundPet.isAdopted === false){
        foundPet.isAdopted = true
      }

      this.setState({
        pets: [...newPets, foundPet]
      })
    }



  render() {
   console.log(this.state)
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
              onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser
              onAdoptPet={this.onAdoptPet}
              pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
