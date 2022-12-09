import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { searchNamePokemon } from "../../api-podedex";
import {Navbar} from '../navbar/navbar';
import { ThemeContext } from "../../contexts/theme-context";
import { Rodape } from "../footer/footer";
import * as C from './styles';
import { SearchBar } from "../searchbar/searchbar";

export const Details = () => {    
    const { name } = useParams();
    const [pokemon, setPokemon] = useState();
    const { theme } = useContext(ThemeContext);

    const fetchData = async () => {
        const cathPokemon = async () => {
        const infos = await searchNamePokemon(name);
        setPokemon(infos);
        }
        cathPokemon(name);
    }   

    useEffect(() => { 
        fetchData()            
    },[name]);

    return (
        <>
            <Navbar />        
            <C.ContainerDetails background={theme.background}>
                
                    {pokemon ? (
                    <C.DetailsCard border={theme.border}>
                    <C.CardNameContainer><C.NameCard>{pokemon.name}</C.NameCard></C.CardNameContainer>

                    <C.CardImgContainer>
                    
                    <C.ImgCard src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={pokemon.name}></C.ImgCard>
                    
                    </C.CardImgContainer> 

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
                    </C.DetailsCard> 
                    ):(
                    <C.DivError>
                    <SearchBar/>
                    <C.DetailsCard border={theme.border}>
                        <C.MsgErro>Esse Pokemon não existe!</C.MsgErro>
                    </C.DetailsCard>
                    </C.DivError>                            
                    ) }        

                   
                    
                   
                       
            </C.ContainerDetails>
        <Rodape />
        </>
    );
}