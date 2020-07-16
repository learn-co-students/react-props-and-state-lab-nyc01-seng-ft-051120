import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">
          {this.props.pets.map((pet, index) => 
              <Pet
                onAdoptPet={this.props.onAdoptPet}
                key={index}
                pet={pet}
                // name={pet.name}
                // type={pet.type}
                // age={pet.age}
                // weight={pet.weight}
                // gender={pet.gender}
                // isAdopted={pet.isAdopted}
              />
          )}
           </div>
  }
}

export default PetBrowser

   