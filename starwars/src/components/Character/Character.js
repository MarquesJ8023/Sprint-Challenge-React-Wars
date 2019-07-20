import React from 'react';
import { Card } from 'semantic-ui-react';
import { StyledH2, CardStyle, CardDisplay } from '../../Styles.js';

export default function Character (props) {
	console.log(props);
	return (
		<CardDisplay className="photo-card">
			<CardStyle className="content-wrapper">
				<StyledH2 color="brown">{props.name}</StyledH2>
				<Card.Content>
					<p>Created: {props.created}</p>
					<p>Birth year: {props.birthyear}</p>
					<p>Gender: {props.gender}</p>
					<p>Films: {props.films}</p>
					<p>Starships: {props.starships}</p>
					<p>Vehicles: {props.vehicles}</p>
				</Card.Content>
			</CardStyle>
		</CardDisplay>
	);
}