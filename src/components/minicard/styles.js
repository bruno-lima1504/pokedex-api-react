import styled from "styled-components";

export const ContainerMiniCard = styled.main `
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
`
export const Title = styled.h3 `
    color: #fff;  
    font-size: 30px;
    font-weight: 800;
`
export const InfosContainer = styled.div `
    color: #fff;
    display: flex;
    flex-direction: row;    
    align-items: center;
    justify-content: center;
    width: 100%;
`
export const InfoContainerSection = styled.div `
    width: 50%;
`
export const ImgInfo = styled.img `
    width: 60%;
    filter: drop-shadow(0 0 00.4rem #fff);
`
export const TypesInfo = styled.p `
            margin-top: 15px;
            color: #000;
            font-weight: 600;
            padding: 5px;
            width: 70%;
            background: linear-gradient(18deg, rgba(143,143,143,0.927608543417367) 0%, rgba(255,255,255,0.8911939775910365) 100%);
            border-radius: 10px;
            box-shadow: 1px 1px 1px #000;
`
