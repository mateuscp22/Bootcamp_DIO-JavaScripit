const pokeApi = {};

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url).then((response) => response.json());
};

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url =
    "https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}";

  /* SRV access  */
  return (
    fetch(url)
      /* convert list to JSON */
      .then((response) => response.json())
      /* get list into JSON */
      .then((jsonBody) => jsonBody.results)
      /* change list to a new pokemon detail list premise in JSON (convert to JSON)*/
      .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
      /* Promise list*/
      .then((detailRequests) => Promise.all(detailRequests))
      .then((pokemonsDetails) => pokemonsDetails)
  );
};

Promise.all([
  fetch("https://pokeapi.co/api/v2/pokemon/1"),
  fetch("https://pokeapi.co/api/v2/pokemon/2"),
  fetch("https://pokeapi.co/api/v2/pokemon/3"),
  fetch("https://pokeapi.co/api/v2/pokemon/4"),
]).then((results) => {
  console.log(results);
});
