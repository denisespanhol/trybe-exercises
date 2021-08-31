import './App.css';
import React, { Component } from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';


class App extends Component {
  render() {
    return (
      <main>
        {pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemons={pokemon} />)}
      </main>
    );
  }
}

export default App;
