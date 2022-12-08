import styled from "styled-components";
import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { ThemeContext } from "../../contexts/theme-context";
import * as C from './styles'


export const Minicard = ({pokemon}) => {       
     
    const { theme } = useContext(ThemeContext)

    return (   
        <C.ContainerMiniCard boxshadow={theme.boxshadow} background = {pokemon.types[0].type.name}>     
        
            <StyledLink to={`/details/${pokemon.name}`}>
                <div>
                    <C.Title>{pokemon.name}</C.Title>
                </div>                
                <C.InfosContainer>
                    <C.InfoContainerSection>
                        <C.ImgInfo src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={pokemon.name}></C.ImgInfo>
                    </C.InfoContainerSection>                   
                    <C.InfoContainerSection>
                        {pokemon.types.map((type, index) => {
                            return(
                                <C.TypesInfo key={index}>{type.type.name}</C.TypesInfo>
                            )
                        })}
                    </C.InfoContainerSection>
                </C.InfosContainer>                
            </StyledLink> 

        </C.ContainerMiniCard>
    );
};

const StyledLink = styled(Link) `
    text-decoration: none;
    width: 100%;    
    display: flex;
    flex-direction: column;
    align-items: center;    

    :visited {
    color: #000;
    }
`