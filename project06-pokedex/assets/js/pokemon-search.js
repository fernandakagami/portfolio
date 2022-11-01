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

    if (pokemon === 'normal') {
        pokeSearchType(1);
    } else if (pokemon === 'fighting') {
        pokeSearchType(2);
    } else if (pokemon === 'flying') {
        pokeSearchType(3);
    } else if (pokemon === 'poison') {
        pokeSearchType(4);
    } else if (pokemon === 'ground') {
        pokeSearchType(5);
    } else if (pokemon === 'rock') {
        pokeSearchType(6);
    } else if (pokemon === 'bug') {
        pokeSearchType(7);
    } else if (pokemon === 'ghost') {
        pokeSearchType(8);
    } else if (pokemon === 'steel') {
        pokeSearchType(9);
    } else if (pokemon === 'fire') {
        pokeSearchType(10);
    } else if (pokemon === 'water') {
        pokeSearchType(11);
    } else if (pokemon === 'grass') {
        pokeSearchType(12);
    } else if (pokemon === 'electric') {
        pokeSearchType(13);
    } else if (pokemon === 'psychic') {
        pokeSearchType(14);
    } else if (pokemon === 'ice') {
        pokeSearchType(15);
    } else if (pokemon === 'dragon') {
        pokeSearchType(16);
    } else if (pokemon === 'dark') {
        pokeSearchType(17);
    } else if (pokemon === 'fairy') {
        pokeSearchType(18);
    } else {
        pokeSearchPokemon(pokemon);
    }
};

function pokeSearchType(pokemon) {
    const url = `https://pokeapi.co/api/v2/type/${pokemon}`

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

function pokeSearchPokemon(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`            

    fetch(url)
        .then(result => result.json())
        .then(convertPokeApiDetailToPokemon)
        .then(convertPokemonToHtml)    
        .catch(error => {
            console.log(error);
            pageError();
        })    
            
};

document.querySelector('.content-return').addEventListener("click", () => {
    ol.innerHTML = '';
    pagination.style.display = "flex";
    returnButton.style.display = "none";
    offset = 0
    
    loadPokemonItens(offset, limit);    
})

function pageError() {
    const li = document.createElement("li");
    const h2 = document.createElement("h2");
    const h2Text = document.createTextNode("Page Not Found");
    const image = document.createElement("img");
    image.classList.add("error-image");
    image.src = "./assets/images/pikachu.png";
    const p = document.createElement("p");
    const pText = document.createTextNode("Sorry, Trainer! We're not able to find the search you're looking for.");
    ol.appendChild(li);
    li.appendChild(h2);
    h2.appendChild(h2Text);
    li.appendChild(image);
    li.appendChild(p);
    p.appendChild(pText);
}

