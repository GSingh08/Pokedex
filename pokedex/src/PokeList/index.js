import React from 'react';

const PokeList = props => {
  return (
    <div className='pokemon-container'>
      <h1> Pokemon</h1>
      <div className='pokemon-wrapper'>
        {props.pokeList.map(pokemon =>{
          return (
            <p key={pokemon.name} onClick={() => props.getUrl(pokemon.url)}>
              {pokemon.name}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default PokeList;
