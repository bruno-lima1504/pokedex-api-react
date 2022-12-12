export const searchNumPokemons = async (limitPokemon) => {
    
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limitPokemon}&offset=0`
    const response = await fetch(url)    
    return await response.json()   
}

export const searchNamePokemon = async (pokemon) => {  
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const response = await fetch(url)
    return await response.json()        
}   

export const getPokemons = async (url) => {    
    const response = await fetch(url)
    const pokeList = await response.json()    
    return pokeList    
}

