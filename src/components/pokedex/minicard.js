import React from "react";
import styled, { css } from "styled-components";
import { Link } from 'react-router-dom';
import grass from './grass.jpg'

const Minicard = ({pokemon}) => {
    
       const type = pokemon.types[0].type.name
       
    return (   
        <MiniCardContainer background = {type}>     
        
            <StyledLink to={`/details/${pokemon.name}`}>
                <div>
                    <img src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={pokemon.name}></img>
                </div>
                <div>
                    <h3>{pokemon.name}</h3>
                    <div>
                        {pokemon.types.map((type, index) => {
                            return(
                                <p key={index}>{type.type.name}</p>
                            )
                        })}                    
                    </div>
                </div> 
            </StyledLink>           
        </MiniCardContainer>
    );
};

export { Minicard }

const MiniCardContainer = styled.main`
    
    background-image: ${props => `url(${props.background}.jpg)`};
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: row;
    width: 400px;
    height: 250px;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 8px;
    box-shadow: 2px 2px 2px #484d4d;
    margin: 10px;
    padding: 10px;
    
    div {
        width: 50%;
    }
    
    
    
    `

const StyledLink = styled(Link) `
    text-decoration: none;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    :visited {
    color: #000;
    }
`   