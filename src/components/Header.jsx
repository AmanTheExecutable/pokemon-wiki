import React from "react";
import { apiFetch2 } from "./apiFetch";
import "./css/Header.css";
import Dialog from "./Dialog";

const Header = props => {
	const [search, setSearch] = React.useState("");
	const [isDialogOpen, setDialogOpen] = React.useState(false);
	const [pokemonDetails, setPokemonDetails] = React.useState({});
	let { pD, setPD } = props;

	const newData = async url => {
		const response = await apiFetch2(url);
		setPD(response);
	};
	const newData2 = async url => {
		const response = await apiFetch2(url);
		if (response === null) {
			alert("Pokemon not found");
			setSearch("");
			return;
		}
		setPokemonDetails(response);
		openDialog();
	};

	const openDialog = () => {
		document.body.style.overflow = "hidden";
		setDialogOpen(true);
	};

	const closeDialog = () => {
		document.body.style.overflow = "auto";
		setSearch("");
		setDialogOpen(false);
	};

	return (
		<>
			<div className="header">
				<h1>Pokemon Wiki</h1>
				<div className="search">
					<input
						type="text"
						value={search}
						placeholder="Search for a pokemon"
						onChange={e => {
							setSearch(e.target.value);
						}}
					/>

					<button
						onClick={() => {
							let query = search.toLowerCase();
							newData2(`https://pokeapi.co/api/v2/pokemon/${query}/`);
						}}
					>
						Search Pokemon
					</button>
				</div>

				<div className="btns">
					{pD.previous != null && (
						<button
							onClick={() => {
								newData(pD.previous);
							}}
						>
							Previous Cards
						</button>
					)}
					<button
						onClick={() => {
							newData(pD.next);
						}}
					>
						New cards
					</button>
				</div>
			</div>
			{isDialogOpen && (
				<Dialog
					pokemonDetails={pokemonDetails}
					onClose={closeDialog}
					imgUrl={pokemonDetails?.sprites.other.dream_world.front_default}
				/>
			)}
		</>
	);
};

export default Header;
