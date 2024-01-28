import React, { useEffect } from "react";
import apiFetch from "./components/apiFetch";
import Cards from "./components/Cards";
import { useState } from "react";
import "./components/css/App.css";
import Header from "./components/Header";

const App = () => {
	const [pokemonData, setPokemonData] = useState({});
	const [favourites, setFavourites] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const response = await apiFetch();
			setPokemonData(response);
		};

		fetchData();
	}, []);

	return (
		<>
			<Header pD={pokemonData} setPD={setPokemonData} />

			<div className="main-container">
				{pokemonData?.results?.map(pokemon => {
					return (
						<Cards
							key={pokemon.name}
							name={pokemon.name}
							url={pokemon.url}
							favourites={favourites}
							setFavourites={setFavourites}
						/>
					);
				})}
			</div>
		</>
	);
};

export default App;
