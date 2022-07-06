import { useState } from 'react';
import Card from './Card';
import FullCard from './FullCard';

const Cards = () => {

	// var DATA = null;
	const [data, setData] = useState(null);

	const [showFullCard, setFullCard] = useState(false);
	const [char, setChar] = useState(null);

	const expand = (e) => {
		var name = e.target.innerText;
		setChar( data.filter( el => el.name === name ));
		setFullCard( !showFullCard );
	}

	const closeBtn = () => {
		setFullCard( !showFullCard );
		// console.log( showFullCard );
		setChar( null );
	};

	const API_KEY = 'e223132618msh390c19bcf4f50adp105a8fjsn03226cc4bc99';

	const options = {
		method: 'GET',
		headers: {
		  'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
		  'X-RapidAPI-Key': API_KEY
		}
	};

	const URL = `https://superhero-search.p.rapidapi.com/api/heroes`;	
	
	window.onload = () => {
		fetch(URL, options)
		.then(response => response.json())
		.then(result => {
			setData(result);
			// console.log(result);
		})
		.catch(error => console.error(error));
		// console.log('fetched data');
	}

	return (
		<>
		<div className="menu-cards">
			<h2>Explore Random Heroes (and Villans)</h2>

			{ data && data.map( hero => {
				 return (
				 	<Card 
				 	  key={hero.id} 
				 	  name={hero.name}
				 	  powerStats={hero.powerstats}
				 	  placeOfBirth={hero.biography.placeOfBirth}
				 	  image={hero.images.sm}
				 	  onClick={expand}
				 	/>
				 )
			}) }
			
			{ showFullCard && <FullCard character={char} closeBtn={closeBtn}/> }
		</div>
		</>
	)
}

export default Cards;
