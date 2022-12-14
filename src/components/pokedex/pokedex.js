import React, { useState, useEffect, useContext } from "react";

import { Button } from "../button/button";
import { Minicard } from "../minicard/minicard";
import { SearchBar } from "../searchbar/searchbar";
import { Navbar } from "../navbar/navbar";
import { Rodape } from "../footer/footer";

import { getPokemons, searchNumPokemons } from '../../api-podedex';
import { ThemeContext } from "../../contexts/theme-context";

import styled from "styled-components";

const Pokedex = () => {

    const { theme } = useContext(ThemeContext)
    const [pokemons, setPokemons] = useState([]);
    const [count, setCount] = useState(10); 
    const [showElement, setShowElement] = useState(false)
    const showOrHide = (boolean) => setShowElement(boolean)
     
      
      const cathLinks = async () => {        
          const data = await searchNumPokemons(count);        
          const promises = data.results.map( async (pokemon) => {            
            return await getPokemons(pokemon.url)          
          });
  
      const results = await Promise.all(promises);    
       setPokemons(results);    
      }

      useEffect(() => {   
        cathLinks()
      }, [count, showElement])
  
      const addPokemon = () => {
        setCount(count + 10) 
        showOrHide(true)     
      } 
      const removePokemon = () => {
        if(count === 20){
            setCount(count - 10)
            showOrHide(false)
        } else {
            setCount(count - 10)}            
      } 
      
    return (
        <> 
            <Main 
            background={theme.background} 
            color={theme.color}>
                <Navbar setBtn={false} />
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
                                    <Minicard 
                                    key={index} 
                                    pokemon={pokemons} /> 
                                );  
                            })}
                        </ContainerPokedex>
                )}
                
                {showElement ? 
                <Button 
                text="ver menos" 
                attPokemon={removePokemon} /> : null}
                <Button 
                text="ver mais" 
                attPokemon={addPokemon} />
                <Rodape />                 
            </Main>                                            
        </>
    );
}

export { Pokedex }

const Main = styled.main `
width: 100%;
    text-align: center;
    background-color: ${props => props.background};
    
    h1 {
        font-size: 60px;
        font-weight: 900;
        color: ${props => props.color};        
        margin: 20px 0px;
    }
`
const ContainerPokedex = styled.div`
    display:grid;
    grid-gap: 25px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin: 0px 30px;

    @media (max-width: 700px){
        margin: 0px 10%;        
    }    
`

