import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/theme-context";


const Button = ({text, attPokemon }) => {

    const { theme } = useContext(ThemeContext)

    return (
        <>
        <Buttonstyled onClick={attPokemon} background={theme.backgroundbtn} color={theme.colorBtn}>{text}</Buttonstyled>
        </>
    )
}

export {Button}

const Buttonstyled = styled.button `
    font-weight: 600;
    padding:10px;
    height: 40px;
    border: none;
    border-radius: 5px;
    margin: 20px;
    background-color: ${props => props.background};
    color: ${props => props.color};
    cursor: pointer;

    :hover {
            background-color: rgba(8,34,78,.9);
            color: #fff;
        }
        
    @media (max-width: 700px){
        margin-left: 10px;
    }
`

