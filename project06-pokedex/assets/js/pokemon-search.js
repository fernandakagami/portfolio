const pagination = document.querySelector('.pagination');
const returnButton = document.querySelector('.content-return');
const ol = document.querySelector('.pokemons');

document.querySelector('.pokemon-input').addEventListener("keypress", (e) => {    
    if (e.key === "Enter") {        
        ol.innerHTML = '';        
        pagination.style.display = "none";        
        returnButton.style.display = 'inline-block';
        content.style.display = "none";
        coll.style.display = "inline-block";
        let pokemonInput = document.querySelector('.pokemon-input');        
        pokeSearch(pokemonInput.value.toLowerCase().replaceAll(/\s/g,''));
        pokemonInput.value = '';
    }
})

function pokeSearch(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    fetch(url)
        .then(result => result.json())
        .then(convertPokeApiDetailToPokemon)
        .then(convertPokemonToHtml)            
};

document.querySelector('.content-return').addEventListener("click", () => {
    ol.innerHTML = '';
    pagination.style.display = "flex";
    returnButton.style.display = "none";
    offset = 0
    
    loadPokemonItens(offset, limit);    
})

