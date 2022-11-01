import React from "react";
import styled, { css } from "styled-components";
import { Link } from 'react-router-dom';
import grass from './grass.jpg'

const Minicard = ({pokemon}) => {
    
       
    return (   
        // <MiniCardContainer background = {`$={pokemon.types[0].type.name}`}>     
        <MiniCardContainer grass>
            <Link to={`/details/${pokemon.name}`}>
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
            </Link>           
        </MiniCardContainer>
    );
};

export { Minicard }

const MiniCardContainer = styled.main`
    background-image: ${props => `url({${props.}})`};
    
    /* background-image: url(${grass}); */

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
    padding: 10px;`