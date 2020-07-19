import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">
       {this.props.pets.map(pet => 
       <Pet
       key={pet.id}
       gender={pet.gender}
       name={pet.name}
       type={pet.type}
       age={pet.age}
       weight={pet.weight}
      /> 
        )} 
       
    </div>
  }
}

export default PetBrowser
