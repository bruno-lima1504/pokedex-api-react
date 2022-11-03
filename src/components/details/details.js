import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { searchPokemon } from "../../api";
import {Navbar} from '../navbar/navbar';
import { ThemeContext } from "../../contexts/theme-context";


const Details = () => {    
    const { name } = useParams();
    const [pokemon, setPokemon] = useState();
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        const fetchData = async () => {
            const cathPokemon = async () => {
            const infos = await searchPokemon(name);

            setPokemon(infos)
            }
            cathPokemon(name)
        }     

        fetchData()
            
    },[name]);        
        

    return (
        <>
        <Navbar />

        <ContainerDetails background={theme.background}>
        <DetailsCard border={theme.border}> 

            {pokemon && (<DivName><h2>{pokemon.name}</h2></DivName>) }             

            {pokemon && (                
            <ImgDiv>
            
                <img src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={pokemon.name}></img>
                
            </ImgDiv> ) }                      
            
            {pokemon && (
            <InfoDiv>
                
                <div>
                    {pokemon.types.map((type, index) => {
                        return(
                            <p key={index}>{type.type.name}</p>
                        )
                    })}                    
                </div>
                <div>
                <h5>Abilities:</h5>
                {pokemon.abilities.map((ability, index) => {
                        return(
                            <p key={index}>{ability.ability.name}</p>
                        )
                    })}
                </div>
                <div>
                    <h5>Status:</h5>
                    {pokemon.stats.map((stat, index) => {
                        return(                            
                            <p key={index}>{stat.stat.name} : {stat.base_stat}</p>
                        )
                    })}
                </div>
            </InfoDiv>)}
        </DetailsCard>
        </ContainerDetails>
        </>

    )
}

export { Details }

const ContainerDetails = styled.div `
display: flex;
width: 100%;
justify-content: center;
background-color: ${props => props.background};
`

const DetailsCard = styled.main`
    background: linear-gradient(330deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0.8911939775910365) 100%);
    display: flex;
    flex-direction: column;
    width: 350px;
    min-height: 530px;
    align-items: center;
    box-sizing: border-box;
    border: ${props => props.border};
    border-radius: 8px;
    box-shadow: 2px 2px 2px #484d4d;
    margin: 10px;
    padding: 15px;


`
const DivName = styled.div `
    width: 100%;
    background-color: #eeeeee;
    margin-bottom: 3px;
    border-radius: 8px;

    h2 {
                text-align: center;
                font-weight: 900;
                font-size: px;
                margin:0;
            }

`            

    const ImgDiv = styled.div `
            text-align: center;
            width: 100%;
            background: linear-gradient(0deg, rgba(39,255,0,1) 0%, rgba(235,251,244,1) 48%, rgba(0,176,255,0.8911939775910365) 100%);
            border-radius: 8px;

            img {       
                width: 50%;               
            }
    `
     const InfoDiv = styled.div `
            div {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                margin: 5px;
                justify-content: center;
                align-items: center;
                                
            }



            h5 {
                width:100%;
                margin: 0;
                margin-left: 20px;
            }
            
            p {
              margin: 5px;
              background-color: #fff;
              padding: 8px;
              border-radius: 8px;
              white-space: nowrap;
              
            }
 
     `
    


