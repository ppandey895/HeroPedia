import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Carousel = ({ characters }) => {
	const [constraints, setConstraints] = useState({left:null, right:null});
	const carousel = useRef();

	useEffect(() => {
		setConstraints({right:0,
				  		left: carousel.current.offsetWidth - carousel.current.scrollWidth});
	}, [constraints]);

	return (
		<>
		<motion.div className="carousel">
			<motion.div 
				drag="x" 
				ref={carousel} 
				dragConstraints={constraints} 
				className="inner-carousel"
				whileTap={{ cursor: "grabbing" }}
			>

				<ul>
					{characters && characters.map( character => {
							return (
								<motion.li
									key={ character.id }
									initial={{y: '-50vw'}}
									animate={{y: 0}}
									transition={{duration: 2, type: 'spring'}}
								>
									<a href="">
										<img src={ character.src } alt="no image" />
									</a>
									<span>{ character.name }</span>
								</motion.li>
							)
						})
					}
				</ul>
			</motion.div>
			
		</motion.div>
		<h3 className="carousel-title">Explore Heroes and Villains.</h3>
	</>
	)
}

export default Carousel;