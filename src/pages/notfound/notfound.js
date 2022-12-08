import React from 'react'
import { Link } from "react-router-dom";
import erro404 from '../../assets/404.jpg'
import * as C from './styles'

export const NotFound = () => {
    return (
        <C.Container>
            <C.Title>404 - Página não encontrada!!!</C.Title>
            <C.Text>Não se preocupe ela ainda está em Desenvolvimento!</C.Text>
            <C.Text>Ufa!!</C.Text>
            <C.Text>Para mais projetos e contato:</C.Text>
            <C.Links href="https://github.com/bruno-lima1504" target="_blank" rel="noreferrer" >GitHub</C.Links>
            <C.Links href="https://www.linkedin.com/in/bruno-lima-9ba21b242/" target="_blank" rel="noreferrer">Linkedin</C.Links>
            <Link to='/'>
            <p>Voltar!</p>
            </Link>
            <C.Img src={ erro404 } alt="imagem de erro"></C.Img>
                      
        </C.Container>
    )
}