import React from "react";
import "./css/Cards.css";
import { imgFetch } from "./apiFetch";
import Dialog from "./Dialog";
import Blank from "./assets/Blank.png";
import Filled from "./assets/Filled.png";

const Cards = ({ name, url }) => {
	const [img, setImg] = React.useState("");
	const [isDialogOpen, setDialogOpen] = React.useState(false);
	const [pokemonDetails, setPokemonDetails] = React.useState({});
	const [isFavourite, setIsFavourite] = React.useState(false);

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

	const toggleFavourite = () => {
		setIsFavourite(!isFavourite);
	};
	React.useEffect(() => {
		fetchImg(url);
	}, [url]);

	return (
		<>
			<div className="container">
				<img src={img} alt="Pokemon" id="main-img" />
				<h1>{name}</h1>
				<div className="img-footer">
					<button onClick={openDialog}>Know More</button>
					<img
						src={isFavourite ? Filled : Blank}
						alt="Heart"
						id="favourite"
						onClick={toggleFavourite}
					/>
				</div>
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
