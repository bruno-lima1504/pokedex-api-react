import React, { useState } from "react";
import styled from "styled-components";
import { searchPokemon } from "../../api.js";

const SearchBar = () => {  

    const [search, setSearch] = useState("bulbasaur")
    const [pokemon, setPokemon] = useState()   
    const onChangeHandler = (e) => {
        let pokeValue = e.target.value.toLowerCase()        
        setSearch(pokeValue)        
    } 

    const onButtonClickHandler = () => {
        onSearchHandler(search)        
    }

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)        
    }     
      
    return (
        <SearchContainer>
            <input type="text" placeholder='Digite o pokemon' onChange={onChangeHandler}/>

            <button onClick={onButtonClickHandler} >Procurar</button>
            {pokemon ? (
                <div>
                    <div>Nome: {pokemon.name}</div>
                    <div>Peso: {pokemon.weight}</div>
                    <img src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={pokemon.name} />
                </div>
            ) : null }
        </SearchContainer>
    )
}

export { SearchBar }

const SearchContainer = styled.div `
    display: flex;
    margin-top: 30px;
    padding: 0 20px;
    justify-content: center;

    Input {
        padding: 10px;
        box-shadow: 0px 2px 2px (0, 0, 0, 0,25);
        margin-right: 25px;
        border-radius: 5px;
        border: 1px solid #000;        
    }

    button {
        background-color: #0e6f9f;
        border: none;
        border-radius: 5px;
        height: 50px;
        color: white;
    }
`




