import React from 'react'

class Pet extends React.Component {
  
  generateButton=(cond)=>{
    if(cond){
      return(
      <React.Fragment>
      <button className="ui primary button">Already adopted</button>
      <button className="ui disable button">Adopt pet</button>
      </React.Fragment>
    )}
    else return(
      <React.Fragment>
      <button className="ui disable button">Already adopted</button>
      <button className="ui primary button">Adopt pet</button>
      </React.Fragment>
    )
  }

  render() {
   
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {(this.props.pet.gender==='female')? '♀':' ♂ ' }
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          
          {this.generateButton(this.props.pet.isAdopted)}
        
          
        </div>
      </div>
    )
  }
}

export default Pet
