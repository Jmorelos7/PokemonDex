import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokedexInfo = () => {

  const { id } = useParams()

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  }, [id])

  console.log(pokemon)

  return (
    
    <div className={`card__one bg-${pokemon?.types[0].type.name}`}>
      <br />
      <div className= 'div__img' >
      <img className='img__poke-one' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </div>
      <div className='data__name'>
      <h1 className='name__name'>{pokemon?.name}</h1>
      <h2 className='poke__num'># {pokemon?.id}</h2>
      </div>
      <ul className='power__ul'>
        <li className='power__li'>
          <span>Weight</span>
          <span>{pokemon?.weight}</span>
        </li>
        <li className='power__li2'>
        <span>Height</span>
          <span>{pokemon?.height}</span>
        </li>
      </ul>
      <div className='power__zone'>
        <div className='abilities__zone'>
          <h3 className='abilities__text'>Abilities</h3>
          <div>
            {
          pokemon?.abilities.map(ability => (
                <div key={`abilities__text ${ability.ability.name}`}>{ability.ability.name}</div>
              ))
          }
          </div>
        </div>
        <div className='type__zone'>
        <h3 className='type__text'>Type</h3>
          <div>
          
            {pokemon?.types.map((type) => (
                <div key={type.slot} className={`type__text ${type.type.name}`}>{type.type.name}</div>
              ))}
            
          </div>
        </div>
      </div>
      <div className='box__end'>
        <div className='poke__moves'>
          <div className='moves__name'>
          <div className='poke__moves-ul'>
          {
            pokemon?.moves.map(move => (
              <div className='contor__moves'>
              <div key={move.move.name}>{move.move.name}</div>
              </div>
            ))
          }
        </div>
          </div>
        </div>
        <div className='stats__end'>
          <h2 className='stats__text'>Stats</h2>
          <div className='hp__progress'>
            <span>HP</span>
            <span>{pokemon?.stats[0].base_stat}</span>
          </div>
          <div className='attack__progress'>
            <span>Attack</span>
            <span>{pokemon?.stats[1].base_stat}</span>
          </div>
          <div className='defense__progress'>
            <span>Defense</span>
            <span>{pokemon?.stats[2].base_stat}</span>
          </div>
          <div className='speed__progress'>
            <span>Speed</span>
            <span>{pokemon?.stats[5].base_stat}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokedexInfo
