import React, {useState} from 'react'; 
import Pokemon from './components/Pokemon';
import Characteristics from './components/Characteristics';

function App() {

	// API KEY - Modified to return 100 pokemons
	const POKEMON_API = "https://pokeapi.co/api/v2/pokemon?limit=100"
	
	// Set default pokemon 
    const [pokemon, setPokemon] = useState([ 
		{
			name: "squirtle", 
			ability: "fly", 
			motion: "mega-punch"
		} 
	])

	// Set default user
	const [username, setUsername] = useState(
		{
			user: "Tim"
		}
	)

	// Update username
	let input_username_value = ""
	const handleChange = (event) => {
		const {name, value} = event.target
		input_username_value = value
	}

	// Run when name of user is submitted, i.e when user clicks "Check Now" to check unique pokemon
	// Get a random number between 1 and 20 and give user their pokemon
	// Generate unique moves and unique abilities by randomization
	const handleSubmit = (event) => {
		console.clear()
		event.preventDefault()

		if (!input_username_value) {
			alert("Invalid username. Enter your name and try again")
			return 
		}

		setUsername(
			{
				user: input_username_value
			}
		)

		// generate user's pokemon ID randomly between and 100
		const randNum = Math.floor(Math.random() * 100)

		// Get pokemon data from API
		// Step 1 - Get the actual pokemon
		fetch(POKEMON_API)
			.then(response => response.json())
			.then(response => {
				const data = response.results
				const pokeName = data[randNum].name 
				
				// Get abilities and super moves
				fetch(data[randNum].url)
					.then(response2 => response2.json())
					.then(response2 => {
						const abilities = response2.abilities
						const moves = response2.moves

						const user_ability = Math.floor(Math.random() * abilities.length)
						const user_move = Math.floor(Math.random() * moves.length)
						setPokemon({
							name: pokeName,
							ability: abilities[user_ability].ability.name, 
							motion: moves[user_move].move.name
						})
					})
			})
	}

	// Render Pokemon and Characteristics 
	return (
		<div className='app_container'>
			<div className='random_numbers_container'>
				<Pokemon handleChange={handleChange} handleSubmit={handleSubmit} />
			</div>
			<div className='characteristics_container'>
				<Characteristics username={username} pokemon={pokemon} />
			</div>
		</div>
		
	);
}

export default App;
