import styled from "styled-components";

export const FooterContainer = styled.footer`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${ props => props.background};
    color: ${ props => props.color};

    @media (max-width: 700px){
        flex-direction: column;

        div{
            margin-bottom: 10px;
    }
    }
`

export const Hr = styled.hr`
    color: ${props => props.color};
`
export const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 32px;
`

export const Link = styled.a`
    
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

