import React, {useState, useEffect} from 'react'; 
import Header from './components/Header';
import RandomNumbers from './components/RandomNumbers';

function App() {
	return (
		<div className='flex-row'>
			<div className=''>
				<RandomNumbers />
			</div>
			

		</div>
		
	);
}

export default App;
