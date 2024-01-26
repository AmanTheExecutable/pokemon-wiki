import React from "react";
import "./css/Cards.css";
import { imgFetch } from "./apiFetch";
import Dialog from "./Dialog";

const Cards = ({ name, url }) => {
	const [img, setImg] = React.useState("");
	const [isDialogOpen, setDialogOpen] = React.useState(false);
	const [pokemonDetails, setPokemonDetails] = React.useState({});

	const fetchImg = async url => {
		const data = await imgFetch(url);
		setPokemonDetails(data);
		setImg(data.sprites.other.dream_world.front_default);
	};

	const openDialog = () => {
		document.body.style.overflow = "hidden";
		setDialogOpen(true);
	};

	const closeDialog = () => {
		document.body.style.overflow = "auto";

		setDialogOpen(false);
	};

	React.useEffect(() => {
		fetchImg(url);
	}, [url]);

	return (
		<>
			<div className="container">
				<img src={img} alt="Pokemon" />
				<h1>{name}</h1>
				<button onClick={openDialog}>Know More</button>
			</div>
			{isDialogOpen && (
				<Dialog
					pokemonDetails={pokemonDetails}
					onClose={closeDialog}
					imgUrl={img}
				/>
			)}
		</>
	);
};

export default Cards;
