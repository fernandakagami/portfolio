const pagination = document.querySelector('.pagination');
const ol = document.querySelector('.pokemons');
const closeButton = document.querySelector(".close");

document.querySelector('.pokemon-input').addEventListener("keypress", (e) => {    
    if (e.key === "Enter") {        
        ol.innerHTML = '';        
        pagination.style.display = "none";                
        let pokemonInput = document.querySelector('.pokemon-input');        
        pokeSearch(pokemonInput.value.toLowerCase().replaceAll(/\s/g,''));  
    }
})

function pokeSearch(pokemon) {    
    if (typeOfPokemon[pokemon]) {
        pokeSearchType(typeOfPokemon[pokemon]);
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
            .then(firstGenerationPokemontoHtml)
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

closeButton.addEventListener("click", () => {
    ol.innerHTML = '';
    pagination.style.display = "flex";    
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

function firstGenerationPokemontoHtml(pokemon) {
    if (pokemon.number <= 151) {
        convertPokemonToHtml(pokemon);
    }
}

