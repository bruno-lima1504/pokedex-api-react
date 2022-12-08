import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Button } from './buttonnavbar';
import { ThemeContext, themes } from '../../contexts/theme-context';
import logopoke from '../../assets/logopoke.png'
import * as C from './styles';
 
export const Navbar = () => {
    
    const { theme, setTheme } = useContext(ThemeContext)   

    return (
        <C.HeaderContainer>
            <div>        
                <img src={logopoke} alt="Logo pokeAPI" />
            </div> 
            <div>
                <C.Ul>
                    <StyledLink to="/">
                        <C.Li>Pokedex</C.Li>
                    </StyledLink>
                    <StyledLink to="/notfound">
                        <C.Li>Favoritos</C.Li>
                    </StyledLink>
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