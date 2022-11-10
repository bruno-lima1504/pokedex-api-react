import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from "../../contexts/theme-context";

const SearchBar = () => {  

    const [search, setSearch] = useState("")
    const { theme } = useContext(ThemeContext)
    let navigate = useNavigate();
       
    const onChangeHandler = (e) => {       
        let pokeName = e.target.value.toLowerCase()        
        setSearch(pokeName)        
    }

    const handleSubmit = (event) => {
        event.preventDefault()        
        navigate(`/details/${search}`);
    }

    return (
        <SearchContainer>            
            <SearchForm onSubmit={handleSubmit}>
                <input placeholder="Digite o nome do pokemon!"onChange={onChangeHandler}type="text"></input>
                <ButtonStl background={theme.backgroundbtn} color={theme.colorBtn}>Procurar</ButtonStl>
            </SearchForm>
        </SearchContainer>
    )
}

export { SearchBar }

const SearchContainer = styled.div `
    display: flex;
    margin-top: 15px;
    padding: 0 20px;
    justify-content: center;
`

const ButtonStl = styled.button `
    background-color: ${props => props.background};
    color: ${props => props.color};
    border: none;
    border-radius: 5px;
    height: 40px;    
    padding: 10px;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;

    :hover {
            background-color: rgba(8,34,78,.9);
        }
`
const SearchForm = styled.form `
    display: flex;
    justify-content: center;

    input {
        padding: 10px;
        width: 190px;
        height: 40px;
        box-shadow: 0px 2px 2px (0, 0, 0, 0,25);
        margin-right: 25px;
        border-radius: 5px;
        border: 1px solid #000;        
    }

`




