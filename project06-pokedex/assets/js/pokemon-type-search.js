let chartPokemons = [];
const type = 'normal';

if (type === 'normal') {
    pokeSearch(1);
} else if (type === 'fighting') {
    pokeSearch(2);
} else if (type === 'flying') {
    pokeSearch(3);
} else if (type === 'poison') {
    pokeSearch(4);
} else if (type === 'ground') {
    pokeSearch(5);
} else if (type === 'rock') {
    pokeSearch(6);
} else if (type === 'bug') {
    pokeSearch(7);
} else if (type === 'ghost') {
    pokeSearch(8);
} else if (type === 'steel') {
    pokeSearch(9);
} else if (type === 'fire') {
    pokeSearch(10);
} else if (type === 'water') {
    pokeSearch(11);
} else if (type === 'grass') {
    pokeSearch(12);
} else if (type === 'electric') {
    pokeSearch(13);
} else if (type === 'psychic') {
    pokeSearch(14);
} else if (type === 'ice') {
    pokeSearch(15);
} else if (type === 'dragon') {
    pokeSearch(16);
} else if (type === 'dark') {
    pokeSearch(17);
} else if (type === 'fairy') {
    pokeSearch(18);
} else {
    pokeSearch();
}

function pokeSearch(type) {
    const url = `https://pokeapi.co/api/v2/type/${type}`

    fetch(url)
        .then(response => response.json())
        .then(result => result.pokemon)
        .then(pokemons => pokemons.forEach(pokemon =>
            fetch(pokemon.pokemon.url)
            .then(pokemonData => pokemonData.json())
            .then(pokemonResultData => pokemonResultData)
            .then(convertPokeApiDetailToPokemon)
            .then(isFirstGeneration)
        ))
};
