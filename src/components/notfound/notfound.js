import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import erro404 from '../../assets/404.jpg'

const NotFound = () => {
    return (
        <Div>
            <h1>404 - Página não encontrada!!!</h1>
            <p>Não se preocupe ela ainda está em Desenvolvimento!</p>
            <p>Ufa!!</p>
            <p>Para mais projetos e contato:</p>
            <a href="https://github.com/bruno-lima1504" target="_blank" rel="noreferrer" >GitHub</a>
            <a href="https://www.linkedin.com/in/bruno-lima-9ba21b242/" target="_blank" rel="noreferrer">Linkedin</a>
            <Link to='/'>
            <p>Voltar!</p>
            </Link>
            <img src={ erro404 } alt="imagem de erro"/> 
                      
        </Div>
    )
}

export { NotFound }

const Div = styled.div `
    display: flex;
    height: 800px;
    flex-direction: column;
    align-items: center;



    h1 {
        font-size: 40px;
        margin: 10px;
    }
    
    p {
        font-size: 20px;
        margin: 10px;
    }

    a {
        text-decoration: none;
        font-weight: 700;
        margin: 10px;
        transition: 0,3s ease-in;        

        :hover {
            color: red;
            font-size: 40px;
        }

    }

    
`

