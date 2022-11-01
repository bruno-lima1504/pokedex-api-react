import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Nav>
            <div>
                <img src="./logopoke.png" alt="PokeAPI" />
            </div>
            <ul>                
                <StyledLink to="/pokedex"><li>Pokedex</li></StyledLink>              
                <li>Super Trunfo</li>
            </ul>
        </Nav>
    )
}

export { Navbar }

const Nav = styled.nav `
    background-color: rgba(8,34,78,.9);
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    align-items: center;

    img {
  
    }

    ul {
       list-style: none;
       display: flex;       
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