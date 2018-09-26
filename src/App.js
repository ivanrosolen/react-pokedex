import React, { Component } from 'react';
import PokemonDetail from './components/PokemonDetail';
import Pokemon from './Pokemon';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {}
    };
  }

  handleOnClick = (id) => {
    fetch(`/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);
        this.setState({ pokemon });
        console.log(pokemon);
      })
      .catch(err => console.log(err));
  }
   render() {
    return (
      <div className="App">
        <input type="text" onChange={evt => this.handleOnClick(evt.target.value)} />
        <button onClick={evt => this.handleOnClick(25)}>Pokemon 25</button>
        <PokemonDetail pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;