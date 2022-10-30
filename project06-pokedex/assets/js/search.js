function insertPokemonHtml(pokemon) {  
    convertPokemonToHtml(pokemon)
}

document.querySelector('.pokemon-input').addEventListener("keypress", (e) => {    
    if (e.key === "Enter") {
        const ol = document.querySelector('.pokemons'); 
        ol.innerHTML = '';
        const pokemon = document.querySelector('.pokemon-input').value;
        loadMoreButton.remove();
        pokeSearch(pokemon);
    }
})


function pokeSearch(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    fetch(url)
        .then(result => result.json())
        .then(convertPokeApiDetailToPokemon)
        .then(insertPokemonHtml)            
};
