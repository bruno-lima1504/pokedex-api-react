import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Button } from './buttonnavbar';
import { ThemeContext, themes } from '../../contexts/theme-context';
import logopoke from '../../assets/logopoke.png'
 
const Navbar = () => {
    
    const { theme, setTheme } = useContext(ThemeContext)   

    return (
        <Nav>
            <div>
                <img src={logopoke} alt="Logo pokeAPI" />
            </div>
            
            <div>
                <ul>
                    <StyledLink to="/"><li>Pokedex</li></StyledLink>
                    <StyledLink to="/notfound"><li>Favoritos</li></StyledLink>
                    <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}></Button>
                </ul>
            </div>                    
            
        </Nav>
    )
}

export { Navbar }

const Nav = styled.nav `    
    background-color: rgba(8,34,78,.9);
    height: 130px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 40px;  
    align-items: center;
    box-sizing: border-box;
    margin: 0 auto;

    @media (max-width: 700px){
     flex-direction: column;
     height: 100%;
     padding: 20px;
    }
    img {
    
    }

    ul {
       list-style: none;
       display: flex;
       width: 100%;
       align-items: center;
       
    }

    li {
        background-color: #0e6f9f;        
        margin: 20px;
        padding: 10px;
        text-decoration: none;
        border-radius: 5px;
        cursor: pointer;
        transition: 0,4s ease-in;
        color: #FFF;
        font-weight: 600;

        :hover {
            background-color: rgba(8,34,78,.9);
        }

        @media (max-width: 700px){
            margin: 10px;
        }
        }  
  
`
const StyledLink = styled(Link) `
    text-decoration: none;

    :visited {
        color: #FFF;
    }
`