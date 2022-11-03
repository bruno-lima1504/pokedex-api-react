import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { ThemeContext } from "../../contexts/theme-context";

const SearchBar = () => {  

    const [search, setSearch] = useState("bulbasaur")
    const { theme } = useContext(ThemeContext)
       
    const onChangeHandler = (e) => {
        let pokeName = e.target.value.toLowerCase()        
        setSearch(pokeName)        
    }
    
        
    return (
        <SearchContainer>
            <input type="text" placeholder='Digite o pokemon' onChange={onChangeHandler} />

            <Link to={`/details/${search}`}>

            <Buttonstl background={theme.backgroundbtn} color={theme.colorBtn}>Procurar</Buttonstl>
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
`

const Buttonstl = styled.button `
    background-color: ${props => props.background};
    color: ${props => props.color};
    border: none;
    border-radius: 5px;
    height: 50px;    
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
`




