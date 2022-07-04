import React from 'react';
import { motion } from 'framer-motion';
import InfoBox from './InfoBox.js';

const FullCard = ({ character, closeBtn }) => {
	const CHARACTER = character[0];
	return (
		<motion.div 
			initial={{ x: '-50vh', opacity: 0 }} 
			animate={{ x: 0, opacity: 1 }} 
			transition={{ duration: 2, type: "spring" }}
			className="full-card"
		>
			<div className="heading">
				<h2>{ CHARACTER.name }</h2>
				<button style={{fontSize: "0.8rem", fontWeight: "200" }}>Add to Favourites.</button>
				<button onClick={closeBtn}>X</button>
			</div>

			<InfoBox character={CHARACTER} />
		</motion.div>
	)
}

export default FullCard;