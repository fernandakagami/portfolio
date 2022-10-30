function convertPokeApiDetailToPokemon(result) {    
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