import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/theme-context";
import * as C from './styles'

export const Rodape  = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <>
        <C.Hr></C.Hr>
        <C.FooterContainer color={theme.color} background={theme.background}>
            <div>
                <h3>Desenvolvido por: Bruno Lima</h3>
            </div>
            <C.ContactContainer>
                <p>Contato:</p>

                <C.Link color={theme.color} href="https://www.linkedin.com/in/bruno-lima-9ba21b242/" target="_blank" rel="noreferrer">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </C.Link>
                
                <C.Link color={theme.color} href="https://github.com/bruno-lima1504" target="_blank" rel="noreferrer"><ion-icon name="logo-github"></ion-icon></C.Link>
            </C.ContactContainer>
        </C.FooterContainer>
        </>
    )
}