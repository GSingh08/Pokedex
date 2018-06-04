import React from 'react'
import './style.css'

const PokemonProfile = props => {
  // deconstruct below for seemless code
  const {name, weight, abilities, sprites,stats, height, base_stat} = props.urlList
  return (
    <div className='pokemon-profile-container'>

      <div className='poke-name'>
         <h1>{name}</h1>
      </div>
      <img src={sprites.front_default} />
      <div className='poke-weight'>
        Weight: <span>{weight}</span>
      </div>
      <div className="pokeHeight">
          Height: <span> {height} </span>
        </div>
      <div className='poke-abilities'>
        Abilities: {abilities.map(ability => {
          return (
            <div key={ability.ability.name}>
              {ability.ability.name}
            </div>
          )
        })}

      </div>
      

    </div>
  )
}

export default PokemonProfile
