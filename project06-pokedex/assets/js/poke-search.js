//async function searchPokemon(poke) {
//    try {
//        let searchData = await fetch (`https://pokeapi.co/api/v2/pokemon/${poke}`);
//        let searchChangedData = await searchData.json();

//        const pokemon = new Pokemon()
//        pokemon.number = searchChangedData.id
//        pokemon.name = searchChangedData.name

//        const types = searchChangedData.types.map((typeSlot) => typeSlot.type.name)
//        const [type] = types

//        pokemon.types = types
//        pokemon.type = type

//        pokemon.photo = searchChangedData.sprites.other.dream_world.front_default

//        pokemon.status = searchChangedData.stats.map((statSlot) => statSlot.base_stat)    

//    return pokemon           
//    } catch {
//        console.log("error");
//    }
//}

//const poke = ("bulbasaur");

//console.log(searchPokemon(poke));

//const pokeSearch = {};

//const poke = 'bulbasaur'

//pokeSearch.getPokemon = (poke = "bulbasaur") => {
//    const url = `https://pokeapi.co/api/v2/pokemon?offset=${poke}`

//    return fetch(url)
//        .then((response) => response.json())
//        .then(console.log(convertPokeApiDetailToPokemon))
//}


//pokeSearch.getPokemon(poke).then((poke = []) => {
//    console.log(poke)
//})

