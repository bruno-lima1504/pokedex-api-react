import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Button } from './buttonnavbar';
import { ThemeContext, themes } from '../../contexts/theme-context';
import logopoke from '../../assets/logopoke.png'
import * as C from './styles';
import { showMeBtn } from "../details/details";
 
export const Navbar = ({setBtn}) => {
    
    console.log(setBtn)
    const { theme, setTheme } = useContext(ThemeContext)
    const [showElement, setShowElement] = useState(false) 
  
    
    const showBtn = (setBtn) => setShowElement(setBtn)
    
    useEffect(() => {
        showBtn(setBtn)
    }, setBtn)

    return (
        <C.HeaderContainer>
            <div>        
                <img src={logopoke} alt="Logo pokeAPI" />
            </div> 
            <div>
                <C.Ul>
                {showElement ?
                     <StyledLink to="/">
                      <C.Li>Pokedex</C.Li>  
                    </StyledLink> : null }
                    <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>
                    </Button>
                </C.Ul>
            </div>
        </C.HeaderContainer>
    )
}

  const StyledLink = styled(Link) `
    text-decoration: none;

    :visited {
        color: #FFF;
    }
 ` 