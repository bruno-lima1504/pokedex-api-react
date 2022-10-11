import React from "react";
import styled from "styled-components";

const CardPreview = (props) => {
    const {pokemon} = props;    
    return (
        <CardContainer>
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
        </CardContainer>
    )
}

export { CardPreview }

const CardContainer = styled.main`
    background-color: pink;
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