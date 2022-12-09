import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from "../../contexts/theme-context";
import * as C from './styles'

export const SearchBar = () => {  

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
        <C.Container>            
            <C.Form onSubmit={handleSubmit}>
                <C.Input placeholder="Digite o nome do pokemon!"onChange={onChangeHandler}type="text"></C.Input>
                <C.Button background={theme.backgroundbtn} color={theme.colorBtn}>Procurar</C.Button>
            </C.Form>
        </C.Container>
    )
}