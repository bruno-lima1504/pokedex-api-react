import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Button } from './buttonnavbar';
import { ThemeContext, themes } from '../../contexts/theme-context';
 
const Navbar = () => {
    
    const { theme, setTheme } = useContext(ThemeContext)

    console.log( theme )

    return (
        <Nav>
            <div>
                <img src="logopoke.png" alt="PokeAPI" />
            </div>
            
            <div>
                <ul>
                    <StyledLink to="/"><li>Pokedex</li></StyledLink>
                    <li>Super Trunfo</li>
                </ul>
            </div>                    
            <Button text="Dark-mode" onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)} >DarkMode</Button>
        </Nav>
    )
}

export { Navbar }

const Nav = styled.nav `    
    background-color: rgba(8,34,78,.9);
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 20px;
    align-items: center;
    box-sizing: border-box;

    @media (max-width: 700px){
     flex-direction: column;
     height: 100%;
    }
    img {
    
    }

    ul {
       list-style: none;
       display: flex;
       width: 100%;
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
    }    
  
`

const StyledLink = styled(Link) `
    text-decoration: none;

    :visited {
        color: #FFF;
    }
`