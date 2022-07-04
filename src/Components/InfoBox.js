
const InfoBox = ( {character} ) => {
	return (
		<>
			<div className="info">

					<img src={ character && character.images.lg } alt="couldn't found the hero :/" />
					<div>
						<h4>ID: { character.id}</h4>
						<h2>Name: { character.name }</h2>

						<h4>Physical Appearance</h4>
						<p>Eye Color: { character.appearance.eyeColor }</p>
						<p>Gender: { character.appearance.gender }</p>
						<p>Race: { character.appearance.race }</p>
						<p>Height: { character.appearance.height[0] }</p>
					</div>
			</div>

			<div className="more-info">
				<div className="">
					<h3>Biography: </h3>
					<p><b>Full Name:</b> { character.biography.fullName }</p>
					<p><b>First Appearance:</b> { character.biography.firstAppearance }</p>
					<p><b>Publisher:</b> { character.biography.publisher }</p>
				</div>	
				<div className="">
					<h3>Other Information: </h3>
					<p><b>Group Affiliations:</b> { character.connections.groupAffiliation }</p>
					<p><b>Relatives:</b> { character.connections.relatives }</p>
					<p><b>Base:</b> { character.work.base }</p>
					<p><b>Occupation:</b> { character.work.occupation }</p>

				</div>
			</div>
		</>
	)
}

export default InfoBox;