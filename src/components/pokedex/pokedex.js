import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Button } from "../button/button";
import { Minicard } from "./minicard";
import { getPokemons, searchPokemons } from '../../api-podedex';
import { SearchBar } from "../searchbar/searchbar";
import { Navbar } from "../navbar/navbar";
import { ThemeContext } from "../../contexts/theme-context";



const Pokedex = () => {

    const { theme } = useContext(ThemeContext)
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
                <Main background={theme.background} color={theme.color}>
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

                    <Button text="ver mais" attPokemon={addPokemon} />

                    <Button text="ver menos" attPokemon={removePokemon} />
                </Main>
                            
        </>
    )
}

export { Pokedex }

const Main = styled.main `
width: 100%;
    text-align: center;
    background-color: ${props => props.background};
    
    h1 {
        font-size: 40px;
        font-weight: 900;
        color: ${props => props.color};
    }
`


const ContainerPokedex = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit,4 , minmax(auto, 4fr));
    gap: 15px;      
    
`

