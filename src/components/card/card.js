import React from "react";


async function getPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/charmander')
    const pokemon = await response.json()
    console.log(pokemon)
}



async function getPokemon2() {
    const response2 = await fetch('https://pokeapi.co/api/v2/pokemon-form/4/')
    const pokemon2 = await response2.json()
    console.log(pokemon2)
}

const Pokemoncaraio = () => {
    
    getPokemon()
    getPokemon2()

    return (        
        <>
        </>
        
    )
}


export { Pokemoncaraio }
   
