import React, { useState } from "react";
import styled from "styled-components";
import { searchPokemon } from "../../api.js";
import { Link } from 'react-router-dom'

const SearchBar = () => {  

    const [search, setSearch] = useState("bulbasaur")
       
    const onChangeHandler = (e) => {
        let pokeName = e.target.value.toLowerCase()        
        setSearch(pokeName)        
    }   
    
    console.log(search)
      
    return (
        <SearchContainer>
            <input type="text" placeholder='Digite o pokemon' onChange={onChangeHandler}/>

            <Link to={`/details/${search}`}>
            <button>Procurar</button>
            </Link>            
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




