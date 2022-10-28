const pokemonList = document.querySelector(".pokemons");
const loadMoreButton = document.getElementById('loadMore');
const pokemon = document.querySelector(".pokemon");
const maxRecords = 151;
const limit = 10;
let offset = 0;
const chartPokemons = [];

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {

        pokemons.forEach((pokemon) => {
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
                    backgroundColor: 'black',
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
                            color: "black",
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







      

      

      

      
      



    
