function searchPokemon(result) {    
    const pokemon = new Pokemon()
    pokemon.number = result.id
    pokemon.name = result.name

    const types = result.types.map((typeSlot) => typeSlot.type.name)
    const type = types[0]

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = result.sprites.other.dream_world.front_default

    pokemon.status = result.stats.map((statSlot) => statSlot.base_stat)    

    return pokemon
}

let chartPokemons = [];

function insertPokemonHtml(pokemon) {  
    const olPokemons = document.querySelector(".pokemons");
    const li = document.createElement("li");
    const divContent = document.createElement("div");
    const div = document.createElement("div");
    const number = document.createElement("span");
    const numberText = document.createTextNode(`#${pokemon.number}`);
    const name = document.createElement("span");
    const nameText = document.createTextNode(pokemon.name);            
    const detail = document.createElement("div");
    const ol = document.createElement("ol");
    const divImage = document.createElement("div");
    const image = document.createElement("img");
    const hidding = document.createElement("div");
    const canvas = document.createElement("canvas");

    li.classList.add("pokemon");
    li.setAttribute("id", `pokemon-${pokemon.number}`);

    divContent.classList.add("main-content");

    number.classList.add("number");            
    name.classList.add("name");

    detail.classList.add("detail");

    ol.classList.add("types");

    function pokemonTypes () {
        pokemon.types.forEach((type) => {
            let typePokemon = document.createElement("li");
            typePokemon.classList.add("type");
            typePokemon.classList.add(type);
            let typeName = document.createTextNode(type);
            typePokemon.appendChild(typeName);
            ol.appendChild(typePokemon);                  
            return ol
        });
    }
    
    image.src = pokemon.photo;
    image.alt = pokemon.name;

    hidding.classList.add("hidding");

    canvas.setAttribute("id", pokemon.number);

    olPokemons.appendChild(li);
    li.appendChild(divContent);
    divContent.appendChild(div);
    number.appendChild(numberText);
    div.appendChild(number);
    name.appendChild(nameText);
    div.appendChild(name);
    div.appendChild(detail);
    detail.appendChild(ol);
    pokemonTypes();
    divContent.appendChild(divImage);
    divImage.appendChild(image);
    li.appendChild(hidding);
    hidding.appendChild(canvas);

    if (pokemon.types[0] == 'normal') {
        color = '#a6a877';
    } else if (pokemon.types[0] == 'grass') {
        color= '#77c850';
    } else if (pokemon.types[0] == 'fire') {
        color= '#ee7f30';
    } else if (pokemon.types[0] == 'water') {
        color= '#678fee';
    } else if (pokemon.types[0] == 'electric') {
        color= '#f7cf2e';
    } else if (pokemon.types[0] == 'ice') {
        color= '#98d5d7';
    } else if (pokemon.types[0] == 'ground') {
        color= '#dfbf69';
    } else if (pokemon.types[0] == 'flying') {
        color= '#a98ff0';
    } else if (pokemon.types[0] == 'poison') {
        color= '#a040a0';
    } else if (pokemon.types[0] == 'fighting') {
        color= '#bf3029';
    } else if (pokemon.types[0] == 'psychic') {
        color= '#f65687';
    } else if (pokemon.types[0] == 'dark') {
        color= '#725847';
    } else if (pokemon.types[0] == 'rock') {
        color= '#b8a137';
    } else if (pokemon.types[0] == 'bug') {                
        color= '#a8b720';
    } else if (pokemon.types[0] == 'ghost') {
        color= '#6e5896';
    } else if (pokemon.types[0] == 'steel') {
        color= '#b9b7cf';
    } else if (pokemon.types[0] == 'dragon') {
        color= '#6f38f6';
    } else if (pokemon.types[0] == 'fairy') {
        color= '#f9aec7';
    }

    const labels = [
        'HP',
        'Atk',
        'Def',
        'Special-Atk',
        'Special-Def',
        'Speed',
    ];
    
    const data = {
        labels: labels,
        datasets: [{
            label: 'Pokemon',
            backgroundColor: color,
            data: pokemon.status,
        }]
    };
    
    const config = {
    type: 'bar',
    data: data,
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: color,
                }
            },
            y: {
                display: false,
                grid: {
                    display: false
                }
            },                           
        }    
    }
    };
    
    chartPokemons[pokemon.number] = new Chart(document.getElementById(pokemon.number), config); 
                
    li.addEventListener("click", () => {
        let showBar = document.getElementById(pokemon.number).parentElement;          
        if (showBar.classList.contains('hidding')) {
            showBar.classList.remove('hidding');
            showBar.classList.add('showing');
        } else {
            showBar.classList.remove('showing');
            showBar.classList.add('hidding');
        }                
    });   
}

document.querySelector(".search-image").addEventListener("click", () => {
    (function pokeSearch(pokemon = 'bulbasaur') {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    
        fetch(url)
            .then(result => result.json())
            .then(searchPokemon)
            .then(insertPokemonHtml)            
    })();
});

