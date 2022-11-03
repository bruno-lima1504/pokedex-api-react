import styled from "styled-components";
import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { ThemeContext } from "../../contexts/theme-context";


const Minicard = ({pokemon}) => {       
     
    const { theme } = useContext(ThemeContext)

    return (   
        <MiniCardContainer boxshadow={theme.boxshadow} background = {pokemon.types[0].type.name}>     
        
            <StyledLink to={`/details/${pokemon.name}`}>
                <DivTitle>
                    <h3>{pokemon.name}</h3>
                </DivTitle>                
                <DivInfo>
                    <div>
                        <img src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={pokemon.name}></img>
                    </div>                   
                    <div>
                        {pokemon.types.map((type, index) => {
                            return(
                                <p key={index}>{type.type.name}</p>
                            )
                        })}
                    </div>
                </DivInfo>                
            </StyledLink> 

        </MiniCardContainer>
    );
};

export { Minicard }

const MiniCardContainer = styled.main`  
    
    background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.1)), ${props => `url(${props.background}.jpg)`} ;
    background-position: center;
    display:flex;
    flex-direction: column;
    justify-content:center;
    background-size: cover;
    min-width:50%;
    max-width: 350px;
    height: 250px;
    border-radius: 8px;
    box-shadow: ${props => props.boxshadow};
    margin: 10px;
    padding: 10px;
    `

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
const DivTitle = styled.div `

        h3 {     
        color: #fff;  
        font-size: 30px;
        font-weight: 800;
    }
`

const DivInfo = styled.div `
    color: #fff;
    display: flex;
    flex-direction: row;    
    align-items: center;
    justify-content: center;
    width: 100%;

    div {
        width: 50%;

        img {
            width: 60%;
        }

        p {
            color: #000;
            padding: 5px;
            width: 70%;
        }

    }



    p {
        background-color: #eeeeee;
    }

`