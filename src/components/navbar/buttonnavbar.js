import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/theme-context";

export const Button = (props) => {

    const { theme } = useContext(ThemeContext)
    
    return (
        <Buttonstyled {...props} 
            style={{ color: theme.color, backgroundColor: theme.background }}
        >{theme.btnText}</Buttonstyled>
    )
}

const Buttonstyled = styled.button `
    font-weight: 600;
    padding:10px;
    height: 40px;
    border: none;
    border-radius: 5px;
    margin: 20px;
`

