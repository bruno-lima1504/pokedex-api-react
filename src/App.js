import './App.css';
import React, { useEffect, useState } from 'react';
import { SearchBar } from './components/searchbar/searchbar';
import { Navbar } from './components/navbar/navbar';
import { Pokedex } from './components/pokedex/pokedex';
import styled from 'styled-components';
import { getPokemons, searchPokemons } from './api-podedex';


function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState ([]);

  const cathLinks = async () => {
    setLoading(true)
    const data = await searchPokemons();
    const promises = data.results.map( async (pokemon) => {
        
      return await getPokemons(pokemon.url)
    });
    
   const results = await Promise.all(promises);
   setPokemons(results);        
   setLoading(false);      
  } 
  
  useEffect(() => {
    cathLinks();    
  }, [])      
  
  return (
      
  <div>
      <Navbar />
      <ContentContainer>
        <SearchBar />               
        <Pokedex pokemon={pokemons} loading={loading}/>
      </ContentContainer> 
      
  </div>

  );
}

export default App;


const ContentContainer = styled.div`
`


