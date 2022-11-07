import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/theme-context";

const Rodape = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <>
        <hr></hr>
        <Footer color={theme.color} background={theme.background}>
            <div>
                <h3>Desenvolvido por: Bruno Lima</h3>
            </div>
            <Contato>
                <p>Contato:</p>

                <LinkStyled color={theme.color} href="https://www.linkedin.com/in/bruno-lima-9ba21b242/" target="_blank" rel="noreferrer">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </LinkStyled>
                
                <LinkStyled color={theme.color} href="https://github.com/bruno-lima1504" target="_blank" rel="noreferrer"><ion-icon name="logo-github"></ion-icon></LinkStyled>
            </Contato>
        </Footer>
        </>
    )
}

export { Rodape }

const Footer = styled.footer `
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${ props => props.background};
    color: ${ props => props.color};

    hr {
        color: ${props => props.color};
    }

    @media (max-width: 700px){
        flex-direction: column;

        div{
            margin-bottom: 10px;
        }
    }
`

const Contato = styled.footer `
    display: flex;
    align-items: center;
    font-size: 32px;
`

const LinkStyled = styled.a `

        margin-left: 8px;
        width: 40px;
        height: 40px;
        color: ${ props => props.color};

        :visited {
        color: ${ props => props.color};
        }

        ion-icon {
        width: 100%;
        height: 100%;
        } 
`