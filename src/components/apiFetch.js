const apiFetch = async () => {
	const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
	const data = await response.json();
	return data;
};

export const apiFetch2 = async url => {
	const response = await fetch(url);
	if (!response.ok) {
		return null;
	}
	const data = await response.json();
	return data;
};

export async function imgFetch(url) {
	const response = await fetch(url);
	const data = await response.json();
	return data;
}

export default apiFetch;
