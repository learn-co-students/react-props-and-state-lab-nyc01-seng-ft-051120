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

  onChangeType = (type) => {
    this.setState({ filters: { ...this.state.filters, type: type } })
    console.log(this.state.filters.type)
  }

  getPets= () => {
    let url = '/api/pets'
    if(this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`;
    }

    fetch(url)
    .then(resp=>resp.json())
    .then(data=> this.setState({pets: data}))
    
  }

  adoptPet = petId => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets: pets });
  };

  render() {
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
                onFindPetsClick= {this.getPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet = {this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
