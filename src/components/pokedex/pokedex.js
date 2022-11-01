import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "./button";
import { Minicard } from "./minicard";
import { getPokemons, searchPokemons } from '../../api-podedex';
import { SearchBar } from "../searchbar/searchbar";
import { Navbar } from "../navbar/navbar";


const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [count, setCount] = useState(10);  
      
      const cathLinks = async () => {        
          const data = await searchPokemons(count);        
          const promises = data.results.map( async (pokemon) => {            
            return await getPokemons(pokemon.url)          
          });
  
      const results = await Promise.all(promises);    
       setPokemons(results);    
      }

      useEffect(() => {   
        cathLinks()  
      }, [count])
  
      const addPokemon = () => {
        setCount(count + 10)      
      } 
      const removePokemon = () => {
        if(count === 10)
        {alert('Não é possivel remover mais pokemons')}      
        else
        {setCount(count - 10)}            
      }     
    

    return (
        <>        
            <Main>
                <Navbar />
                <SearchBar />
                <div>
                    <h1>Pokedex</h1>
                </div>

                {pokemons.lenght > 0 ? (
                    <div>carregando</div>
                ) : (
                    <ContainerPokedex>
                        {pokemons && pokemons.map((pokemons, index) => {
                            return (                           
                                <Minicard key={index} pokemon={pokemons} /> 
                            );  
                        })}
                    </ContainerPokedex>

                )}

                <Button text="ver muito mais" addPokemon={addPokemon} />

                <Button text="ver menos" addPokemon={removePokemon} />

            </Main>

        </>
    )
}

export { Pokedex }

const Main = styled.main `
    text-align: center;
    background-color: #DBDBDB;
    
    h1 {
        font-size: 40px;
        font-weight: 900;
    }
`


const ContainerPokedex = styled.div`
    display:grid;
    gap: 10px;
    grid-template-columns: repeat(4, 4fr);  
    text-align: center;
`

