import React from 'react';
import { motion } from 'framer-motion';
import InfoBox from './InfoBox.js';

const SearchPage = ({ heroData }) => {
	return (
		<>
		<motion.div
			initial={{ x: '-150vh' }}
			animate={{ x: 0 }}
			transition={{ duration: 1.2 }} 
			className="search-page"
		>
				{
					heroData && 
					<>
					<InfoBox character={heroData} />
					</>
				}
			
		</motion.div>
		</>
	)
}

export default SearchPage;