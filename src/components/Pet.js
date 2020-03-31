import React from 'react'

//Passing in props 
//this.props.key , onAdoptPet, petObj

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.petObj.gender === "male" ? "♂ " : "♀ "}
            {this.props.petObj.name }
          </a>
          <div className="meta">
            <span className="date">{this.props.petObj.type}</span>
          </div>
          <div className="description">
            <p>{this.props.petObj.age}</p>
            <p>{this.props.petObj.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.petObj.isAdopted === false ? 
          <button onClick={() => this.props.onAdoptPet(this.props.petObj.id)} className="ui primary button">Adopt pet</button>: 
          <button className="ui disabled button">Already adopted</button>}

          {/* <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button> */}
        </div>
      </div>
    )
  }
}

export default Pet
