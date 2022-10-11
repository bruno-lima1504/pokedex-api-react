import React from "react";
import styled from "styled-components";

const Pokemoncard = (props) => {
    const {pokemon} = props;
    console.log(pokemon)
    return (
        <CardContainer>
            <div>
                <img src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={pokemon.name}></img>
            </div>
            <div>
                <div>{pokemon.name}</div>
                <div>
                    {pokemon.types.map((type, index) => {
                        return(
                            <div key={index}>{type.type.name}</div>
                        )
                    })}                    
                </div>
                {pokemon.abilities.map((ability, index) => {
                        return(
                            <div key={index}>{ability.ability.name}</div>
                        )
                    })}

                {pokemon.stats.map((stat, index) => {
                        return(
                            <div key={index}>{stat.stat.name} : {stat.base_stat}</div>
                        )
                    })}
            </div>
        </CardContainer>
    )
}

export { Pokemoncard }

const CardContainer = styled.main`
    background-color: pink;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 500px;
    align-items: center;
    border-radius: 8px;
    box-shadow: 2px 2px 2px #484d4d;
    margin: 10px;
    padding: 10px;

    div{
        width: 100%;
        text-align: center;
    }
    
    img{       
        width: 50%;
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 0px;
    }

    li {
        background-color: #fff;
        margin: 5px;
        width: 70px;

    }

`




