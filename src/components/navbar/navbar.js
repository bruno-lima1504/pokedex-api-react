import React from "react";
import styled from "styled-components";


const Navbar = () => {
    return (
        <Nav>
            <div>
            <img src="./logopoke.png" alt="PokéAPI" />
            </div>
            <ul>
                <li>Pokedex</li>
                <li>Cards</li>
                <li>Super Trunfo</li>
            </ul>
        </Nav>
    )
}

export { Navbar }

const Nav = styled.nav `
    background-color: pink;
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
        background-color: yellow;
        margin: 20px;
        padding: 10px;
    }


`