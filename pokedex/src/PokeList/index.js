import React from 'react';
import './style.css'

const PokeList = props => {
  return (
    <div className='pokemon-container'>
      <h1 className='poke-header'> Pokemon</h1>
      <div className='pokemon-wrapper'>
        {props.pokeList.map(pokemon =>{
          return (
            <p className='pokeName' key={pokemon.name} onClick={() => props.getUrl(pokemon.url)}>
              {pokemon.name}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default PokeList;
