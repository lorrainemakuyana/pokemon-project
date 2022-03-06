import React from 'react'

// Render the app component Characteristics
// username and pokemon props passed from App.js 
// Both created and managed in App.js 

function Characteristics( {username, pokemon} ) {
    
    return (
        <div className='characteristics'>
            <div className='wrapper'>
                <h1 className='hello_header'>{username.user}'s unique Pokemon</h1>
                <div className='pokemon_info'>
                    <ul className='character_info'>
                        <li>name: <strong> <span>{pokemon.name ? pokemon.name : pokemon[0].name}</span> </strong></li>
                        <li>super power: <strong> <span> can {pokemon.ability ? pokemon.ability : pokemon[0].ability}</span> </strong></li>
                        <li>super move: <strong> <span>{pokemon.motion ? pokemon.motion : pokemon[0].motion}</span> </strong></li>
                    </ul>
                </div>
                <div className='hidden_screenshot'>
                    <em>Take a screenshot and show your friends</em> &#x1F609;
                </div>
            </div>
            <footer>
                <div className='copyrights'>
                    &copy; 2022 Built with &#128151; by <a href='https://twitter.com/lolomakuyana' target="_blank" rel="noreferrer">Lorraine Makuyana</a>
                </div>
            </footer>
        </div>
    )
}

export default Characteristics