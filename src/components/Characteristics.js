import React from 'react'

export default function Characteristics( {username, pokemon} ) {
    
    console.log("Username", username)
    console.log("Pokemon", pokemon)
    return (
        <div className='characteristics'>
            <h1 className='hello_header'>{username.user}'s unique Pokemon</h1>
            <div className='pokemon_info'>
                <ul className='character_info'>
                    <li>name: <strong> <span>{pokemon.name ? pokemon.name : pokemon[0].name}</span> </strong></li>
                    <li>super power: <strong> <span> can {pokemon.ability ? pokemon.ability : pokemon[0].ability}</span> </strong></li>
                    <li>super move: <strong> <span>{pokemon.motion ? pokemon.motion : pokemon[0].motion}</span> </strong></li>
                </ul>
            </div>
        </div>
    )
}
