import React from "react";
import styled from "styled-components";
import { searchPokemons } from "../../api-podedex";
import { cathlinks } from "../../App";
import { CardPreview } from "./previewcard";
import App from "../../App";


const Pokedex = (props) => { 
    const {pokemon, loading} = props;    
    return (
        <>
        <main>
            <div>
                <h1>Pokedex</h1>           
            </div>

            {loading ? (
                <div>carregando</div>
            ) : (
                <ContainerPokedex>
                    { pokemon && pokemon.map((pokemon, index) => {return (
                        <CardPreview key={index} pokemon={pokemon}/>
                    );
                    })}
                </ContainerPokedex>
            
            )}             
        </main>

        </>
    )
}

export { Pokedex }


const ContainerPokedex = styled.div`
    display:grid;
    gap: 10px;
    grid-template-columns: repeat(4, 4fr);
`
