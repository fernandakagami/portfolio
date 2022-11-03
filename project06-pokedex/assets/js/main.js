const pokemonList = document.querySelector(".pokemons");
const loadMoreButton = document.getElementById('loadMore');
const pokemon = document.querySelector(".pokemon");
const pokeball = document.querySelector(".pokeball");
const maxRecords = 151;
const limit = 10;
let offset = 0;
let chartPokemons = [];
let color = '';
let pokemonInput = document.querySelector('.pokemon-input').value;

function loadPokemonItens(offset, limit) {    
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    
        pokemons.forEach((pokemon) => {
            convertPokemonToHtml(pokemon)
        })
    })
}

loadPokemonItens(offset, limit);

function removeRotation() {
    pokeball.classList.remove("rotation");
}

loadMoreButton.addEventListener('click', () => {    
    offset += limit;
    const qtdRecordsWithNexPage = offset + limit;    
        
    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);

        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {                 
        pokeball.classList.add("rotation");
        setTimeout(loadPokemonItens, 1000, offset, limit);
        setTimeout(removeRotation, 1000);       
    }
    
});


    
