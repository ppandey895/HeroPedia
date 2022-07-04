
const Card = ({ name, placeOfBirth, powerStats, image, onClick }) => {
	return (
		<div className="card-item">
			<div className="char-img"><img src={image} /></div>
			<div className="char-info">
				<h3  onClick={onClick} className="card-toggle">{ name }</h3>
				<ul className="power-list">
					<li>Place of Birth: { placeOfBirth }</li>
					<li>Intelligence: { powerStats.intelligence }</li>
					<li>Strength: { powerStats.strength }</li>
					<li>Speed: { powerStats.speed }</li>
					<li>Power: { powerStats.power }</li>
				</ul>
			</div>
			
		</div>
	)
}

export default Card;