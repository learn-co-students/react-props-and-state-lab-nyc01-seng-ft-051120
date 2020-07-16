import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  
  render() {
  return <div className="ui cards">{this.props.allPets.map(pet=><Pet key={pet.id} pet={pet}/>)}</div>
  }
}

export default PetBrowser
