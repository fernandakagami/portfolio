function searchPokemon(result) {
    const pokemon = new Pokemon()
    pokemon.number = result.id
    pokemon.name = result.name

    const types = result.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = result.sprites.other.dream_world.front_default

    pokemon.status = result.stats.map((statSlot) => statSlot.base_stat)    

    return console.log(pokemon)
}


(function getPokemon(poke = 'bulbasaur')  {
    const url = `https://pokeapi.co/api/v2/pokemon/${poke}`

    fetch(url)
        .then((response) => response.json())
        .then((result) => searchPokemon(result));
})();








    


        

