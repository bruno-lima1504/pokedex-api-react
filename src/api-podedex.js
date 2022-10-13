
//busca a lista de url da quantidade de pokemon definida

const searchPokemons = async (limitPokemon) => {
    
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limitPokemon}&offset=0`
    const response = await fetch(url)    
    return await response.json()   
}

//Busca a lista de pokemons já em objetos 
const getPokemons = async (url) => {    
    const response = await fetch(url)
    const pokeList = await response.json()    
    return pokeList    
}

export { searchPokemons, getPokemons }