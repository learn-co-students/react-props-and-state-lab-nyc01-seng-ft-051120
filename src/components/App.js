import React from 'react'
import {getAll, getByType} from '../data/pets'
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

  onFindPetsClick=(type)=>{
    this.setState({
      filters: {...this.state.filters, type: type}
    })
  }
  renderPets=()=>{
    switch(this.state.filters.type){
      case 'all': return getAll()
      case 'cat':  return getByType('cat')
      case 'dog': return getByType('dog')
      case 'micropig': return getByType('micropig')
      default: return getAll()
    }
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
              <Filters  onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser allPets={this.renderPets()}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
