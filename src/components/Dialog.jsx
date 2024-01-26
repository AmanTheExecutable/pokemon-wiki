import React from "react";
import "./css/Dialog.css";

const Dialog = ({ pokemonDetails, onClose, imgUrl }) => {
	const pD = pokemonDetails;
	return (
		<>
			<div className="overlay"></div>
			<dialog open className="popup">
				<div className="details">
					<img src={imgUrl} alt="pokemon" />
					<div className="poke-details">
						<h1 id="name">
							<span>Name:</span> {pD?.forms[0].name}
						</h1>

						<h1>
							<span>Height:</span> {pD?.height}
						</h1>
						<h1>
							<span>Weight:</span> {pD?.weight}
						</h1>
						<h1>
							<span>Base Experience:</span> {pD?.base_experience}
						</h1>
						<h1>
							<span>Abilities:</span>
						</h1>
						<ul>
							{pD?.abilities.map((ability, index) => (
								<li key={index}>{ability.ability.name}</li>
							))}
						</ul>
						<h1>
							<span>Moves:</span>
						</h1>
						<ul>
							{pD?.moves.map(
								(move, index) =>
									index <= 10 && <li key={index}>{move.move.name}</li>
							)}
						</ul>
					</div>
				</div>

				<button onClick={onClose}>Close</button>
			</dialog>
		</>
	);
};

export default Dialog;
