import React from 'react';

const PokemonDetail = ({ pokemon }) => {
  const { id, name, sprite, type } = pokemon;

  return (
    <section>
      <img src={sprite}/>
      <div>
        <h1>ID: {id} {name}</h1>
        <p>Type: {type}</p>
      </div>
    </section>
  )
}

export default PokemonDetail;