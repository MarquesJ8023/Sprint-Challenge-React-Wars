import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character/Character.js';

const starWarsAPI = 'https://swapi.co/api/people/';

const App = () => {
	const [
		API,
	
		setAPI
	] = useState(starWarsAPI);
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.
	const [
		content,
		setContent
	] = useState('');
	// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.

	const [
		people,
		setPeople
	] = useState([]);

	useEffect(
		() => {
			axios
				.get(API)
				.then((res) => {
					const result = res.data;
					setContent(result);
					setPeople(result.results);
				})
				.catch((e) => {
					console.log(e);
				});
		},
		[
			API
		]
	);

	console.log(content);
	return (
		<div className="App">
			<div className="HeaderWrapper">
				<h1 className="Header">React Wars</h1>
			</div>
			{people.map((data, index) => (
				<Character
					key={index}
					name={data.name}
					birthyear={data.birth_year}
					created={data.created}
					films={data.films.length}
					gender={data.gender}
					starships={data.starships.length}
					vehicles={data.vehicles.length}
				/>
			))}
		</div>
	);
};

export default App;
