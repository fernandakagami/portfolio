const pokemonList = document.querySelector(".pokemons");
const loadMoreButton = document.getElementById('loadMore');
const pokemon = document.querySelector(".pokemon");
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

const qtdRecordNextPage = offset + limit;

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qtdRecordsWithNexPage = offset + limit;    
       
    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);

        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItens(offset, limit);       
        
    }
})


    
