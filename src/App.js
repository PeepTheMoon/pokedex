import React, { Component } from 'react';
import PokemonList from './PokemonList.js';
import request from 'superagent';

const pikachuData = [
  {
    pokemon:"pikachu",
    name: "pikachu",
    egg_group:"ground"
  },
    {
    pokemon:"yello",
    name:"yello",
    egg_group:"sky"
  }
]

export default class App extends Component {

  //initialize state
  state = {
    // searchQuery: '',
    data: pikachuData,
    name: '',
    type: '',
    attack: null,
    defense: null
  }

// handleChange = (e) => {
//   const value = e.target.value;
//   this.setState({ searchQuery: value });
// }

// handleClick = async () => {
//   const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`) ;

//   console.log(fetchedData.body);

//   this.setState({ data: fetchedData.body.results })
// }

// Searches by name
handleNameChange = (e) => {
  const value = e.target.value;
  this.setState({ name: value});
}

handleNameClick = async () => {
  const fetchedName = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.name}`) ;

  console.log(fetchedName.body);

  this.setState({ name: fetchedName.body.results })
}

//searches by type
handleTypeChange = (e) => {
  const value = e.target.value;
  this.setState({ type: value});
}

handleTypeClick = async () => {
  const fetchedType = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.type}`) ;

  console.log(fetchedType.body);
  this.setState({ type: fetchedType.body.results })
}

//searches by attack value
handleAttackChange = (e) => {
  const value = e.target.value;
  this.setState({ attack: value});
}

handleAttackClick = async () => {
  const fetchedAttack = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.attack}`) ;

  console.log(fetchedAttack.body);
  this.setState({ attack: fetchedAttack.body.results })
}

//searches by defense value
handleDefenseChange = (e) => {
  const value = e.target.value;
  this.setState({ defense: value});
}

handleDefenseClick = async () => {
  const fetchedDefense = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.defense}`) ;

  console.log(fetchedDefense.body);
  this.setState({ defense: fetchedDefense.body.results })
}

  render() {
    
    return (
      <div>
        <div>
          {/* <input onChange={this.handleChange} />
          <button onClick={this.handleClick}>Search Pokemon</button> */}
          <PokemonList data={this.state.data} />
        </div>

        <div className="search-name">
          <input onChange={this.handleNameChange} />
          <button onClick={this.handleNameClick}>Search by Pokemon Name</button>
        </div>

        <div className="search-type">
          <input onChange={this.handleTypeChange} />
          <button onClick={this.handleTypeClick}>Search by Pokemon Type</button>
        </div>

        <div className="search-attack">
          <input type="number" min="0" step="" max="100" onChange={this.handleAttackChange} />
          <button onClick={this.handleAttackClick}>Search by Pokemon Attack</button>
        </div>

        <div className="search-defense">
          <input type="number" min="0" step="" max="100" onChange={this.handleDefenseChange} />
          <button onClick={this.handleDefenseClick}>Search by Pokemon Defense</button>
        </div>

      </div>
   )
  } 
} 