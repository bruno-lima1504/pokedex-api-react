import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    margin-top: 15px;
    padding: 0 20px;
    justify-content: center;
`
export const Button = styled.button `
background-color: ${props => props.background};
color: ${props => props.color};
border: none;
border-radius: 5px;
height: 40px;    
padding: 10px;
font-weight: 600;
font-size: 16px;
cursor: pointer;

:hover {
        background-color: rgba(8,34,78,.9);
    }
`

export const Form = styled.form `
    display: flex;
    justify-content: center;
`
export const Input = styled.input `
        padding: 10px;
        width: 190px;
        height: 40px;
        box-shadow: 0px 2px 2px (0, 0, 0, 0,25);
        margin-right: 25px;
        border-radius: 5px;
        border: 1px solid #000;  
`