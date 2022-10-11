
const searchPokemons = async (limitPokemon) => {
    console.log(limitPokemon)
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limitPokemon}&offset=0`
    const response = await fetch(url)
    
    return await response.json()
    
}
const getPokemons = async (url) => {    
    const response = await fetch(url)
    const poke2 = await response.json()    
    return poke2
    
}

export { searchPokemons, getPokemons }