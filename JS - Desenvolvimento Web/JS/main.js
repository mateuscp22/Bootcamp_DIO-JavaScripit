const offset = 0;
const limit = 10;
const url =
  "https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}";

function convertPokemonTypesLi(PokemonTypes) {
  return PokemonTypes.map(
    (typeSlot) => `<li class="type">${typeSlot.type.name}</li>`
  );
}

function convertPokemonLi(pokemon) {
  return `
    <li class="pokemon">
    <span class="number">#${pokemon.order}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
      <ol class="types">
      ${convertPokemonTypesLi(pokemon.types).join("")}
      </ol>
      <img
        src="${pokemon.sprites.other.dream_world.front_default}"
        alt="${pokemon.name}"
      ></img>
    </div>
  </li>
  `;
}

const pokemonList = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons) => {
  const newHtml = pokemons.map(convertPokemonLi).join("");
  pokemonList.innerHTML = newHtml;
});
