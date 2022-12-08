import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { searchPokemon } from "../../api";
import {Navbar} from '../navbar/navbar';
import { ThemeContext } from "../../contexts/theme-context";
import { Rodape } from "../footer/footer";
import * as C from './styles'


export const Details = () => {    
    const { name } = useParams();
    const [pokemon, setPokemon] = useState();
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const fetchData = async () => {
            const cathPokemon = async () => {
            const infos = await searchPokemon(name);

            setPokemon(infos);
            }
            cathPokemon(name);
        }     

        fetchData();
            
    },[name]);

    return (
        <>
        <Navbar />
        <C.ContainerDetails background={theme.background}>
        <C.DetailsCard border={theme.border}> 

            {pokemon ? (<C.CardNameContainer><C.NameCard>{pokemon.name}</C.NameCard></C.CardNameContainer>) : ( <C.MsgErro>Pokemon não existe!!</C.MsgErro>) }             

            {pokemon && (                
            <C.CardImgContainer>
            
                <C.ImgCard src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={pokemon.name}></C.ImgCard>
                
            </C.CardImgContainer> ) }                      
            
            {pokemon && (
            <div>                
                <C.CardInfoContainer>
                    {pokemon.types.map((type, index) => {
                        return(
                            <C.InfoContent key={index}>{type.type.name}</C.InfoContent>
                        )
                    })}                    
                </C.CardInfoContainer>
                <C.CardInfoContainer>
                <C.InfoNames>Abilities:</C.InfoNames>
                {pokemon.abilities.map((ability, index) => {
                        return(
                            <C.InfoContent key={index}>{ability.ability.name}</C.InfoContent>
                        )
                    })}
                </C.CardInfoContainer>
                <C.CardInfoContainer>
                    <C.InfoNames>Status:</C.InfoNames>
                    {pokemon.stats.map((stat, index) => {
                        return(                            
                            <C.InfoContent key={index}>{stat.stat.name} : {stat.base_stat}</C.InfoContent>
                        )
                    })}
                </C.CardInfoContainer>
            </div>)}
        </C.DetailsCard>        
        </C.ContainerDetails>
        <Rodape />
        </>

    );
}