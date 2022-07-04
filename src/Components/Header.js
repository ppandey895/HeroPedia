import React from 'react';
import Carousel from './Carousel';
import { Outlet, Link } from 'react-router-dom';

const Header = ({ searchText, setSearch, setData }) => {

	const heroes = [
		{id: 0, name: "Spider-Man", src: "https://www.firstcomicsnews.com/wp-content/uploads/2018/04/ASM2017800_dodson.jpg"},
		{id: 1, name: "The Flash", src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F6d%2Fee%2F54%2F6dee5468061ef77fbf1f374c3b17562c.png&f=1&nofb=1"}, 
		{id: 2, name: "Moon Knight", src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.annihil.us%2Fu%2Fprod%2Fmarvel%2Fi%2Fmg%2F9%2Fb0%2F5b7ed633d3b68%2Fclean.jpg&f=1&nofb=1"},
		{id: 3, name: "Deadpool", src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.annihil.us%2Fu%2Fprod%2Fmarvel%2Fi%2Fmg%2F9%2F50%2F5bc913a3d3e67%2Fclean.jpg&f=1&nofb=1"},
		{id: 4, name: "The Joker", src: "https://2.bp.blogspot.com/-olNiVnRPa1Y/W7i_PR6bkMI/AAAAAAAAm8U/zt7J7QVkHmEtMX7Vfu0K0U71yjujXM9HQCLcBGAs/s1600/Blood.jpg"},
		{id: 5, name: "Mephisto", src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdailygeekshow.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2016%2F08%2Fmephisto-personnage.jpg&f=1&nofb=1"}, 
		{id: 6, name: "Apocalypse", src: "https://i.pinimg.com/originals/2f/db/71/2fdb712956831612b595751b43b5148c.jpg"},
		{id: 7, name: "Deathstroke", src: "https://www.comicsthegathering.com/sites/default/files/death.jpg"},
	];

	const API_KEY = 'e223132618msh390c19bcf4f50adp105a8fjsn03226cc4bc99';

	const options = {
		method: 'GET',
		headers: {
		  'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
		  'X-RapidAPI-Key': API_KEY
		}
	};

	const querySearch = (inputChar) => {
		const URL = `https://superhero-search.p.rapidapi.com/api/?hero=${inputChar}`;

		fetch(URL, options)
		.then(response => response.json())
		.then(response => {
		  setData( response );
		})
		.catch(err => console.error(err));
		// console.log('fetched hero data');
	}	

	return (
		<>
		<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
		  <path fill="rgba(0,0,0,0.3)" d="M34.9,-56.4C48.8,-52.5,65.9,-50.2,73.4,-41.1C80.8,-32,78.4,-16,74,-2.6C69.5,10.9,63,21.7,56.5,32.4C50,43.1,43.5,53.6,34.1,60.8C24.7,68,12.3,71.9,-0.3,72.5C-12.9,73,-25.9,70.1,-39.2,65.2C-52.6,60.3,-66.4,53.3,-71.9,42.1C-77.3,30.9,-74.4,15.4,-74.5,0C-74.5,-15.5,-77.4,-30.9,-71.4,-41.2C-65.4,-51.4,-50.5,-56.5,-37.1,-60.6C-23.7,-64.8,-11.8,-68,-0.6,-66.9C10.5,-65.8,21.1,-60.3,34.9,-56.4Z" transform="translate(100 100)" />
		</svg>		
			<div className="header">
			<Link to="/" className="page-title">
				<h1>Hero Pedia.</h1>
				<p>One Stop for All Your Superhero Needs</p>
			</Link>

			<Carousel characters={heroes} />
			
			<div className="search">
				
				<input type="text" placeholder="Search for a hero here (no spaces)" value={searchText} onChange={setSearch}/>
				<Link to="/search">
					<button onClick={ () => querySearch(searchText) }>Search!</button>
				</Link>
			</div>

			<Outlet />
		</div>
		</>
	)
}

export default Header;