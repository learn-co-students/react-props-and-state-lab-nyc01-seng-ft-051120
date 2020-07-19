import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
 state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
    
  
  componentDidMount(){
let petsAPI = '/api/pets'
this.state.filters.type !=="all"? petsAPI+=`?type=${this.state.filters.type}`:

    fetch(petsAPI)
    .then(resp => resp.json())
    .then(pets =>this.setState({pets:pets}))

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
              <Filters  />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
