import React, {useState, useEffect} from 'react'; 
import RandomNumbers from './components/RandomNumbers';
import Characteristics from './components/Characteristics';
import axios from 'axios'

function App() {

	const POKEMON_API = "https://pokeapi.co/api/v2/pokemon"

    const [pokemon, setPokemon] = useState([ 
		{
			name: "squirtle", 
			ability: "fly", 
			motion: "mega-punch"
		} 
	])

	const [username, setUsername] = useState(
		{
			user: "Laura"
		}
	)

	let input_username_value = ""
	const handleChange = (event) => {
		const {name, value} = event.target
		input_username_value = value
	}

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

		const randNum = Math.floor(Math.random() * 20)

		fetch(POKEMON_API)
			.then(response => response.json())
			.then(response => {
				const data = response.results
				const pokeName = data[randNum].name 
				
				fetch(data[randNum].url)
					.then(response2 => response2.json())
					.then(response2 => {
						const abilities = response2.abilities
						const motions = response2.moves
						setPokemon({
							name: pokeName,
							ability: abilities[0].ability.name, 
							motion: motions[0].move.name
						})
					})
			})
	}

	return (
		<div className='app_container'>
			<div className='random_numbers_container'>
				<RandomNumbers handleChange={handleChange} handleSubmit={handleSubmit} />
			</div>
			<div className='characteristics_container'>
				<Characteristics username={username} pokemon={pokemon} />
			</div>
		</div>
		
	);
}

export default App;
