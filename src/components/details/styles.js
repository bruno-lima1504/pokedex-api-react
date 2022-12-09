import styled from "styled-components";

export const ContainerDetails = styled.div `
    display: flex;
    width: 100%;
    height: 80vh;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.background};
`
export const DetailsCard = styled.main `
    background: linear-gradient(330deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0.8911939775910365) 100%);
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 95%;
    max-height: 500px;
    align-items: center;    
    box-sizing: border-box;
    border: ${props => props.border};
    border-radius: 8px;
    box-shadow: 2px 2px 2px #484d4d;
    margin: 10px;
    padding: 15px;
`
export const CardNameContainer = styled.div `
    width: 100%;
    background-color: #eeeeee;
    margin-bottom: 3px;
    border-radius: 8px;
`
export const NameCard = styled.h2 `
    text-align: center;
    font-weight: 900;
    font-size: px;
    margin:0;
`
export const CardImgContainer = styled.div `
    text-align: center;
    width: 100%;
    background: linear-gradient(0deg, rgba(39,255,0,1) 0%, rgba(235,251,244,1) 48%, rgba(0,176,255,0.8911939775910365) 100%);
    border-radius: 8px;
`
export const ImgCard = styled.img `
width: 50%;
`
export const CardInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 5px;
    justify-content: center;
    align-items: center;
`
export const InfoNames = styled.h5 `
    width:100%;
    margin: 0;
    margin-left: 20px;
`
export const InfoContent = styled.p `
    margin: 5px;
    background-color: #fff;
    padding: 8px;
    border-radius: 8px;
    white-space: nowrap;
`
export const MsgErro = styled.div `
    margin-top: 30px;
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    text-align: center;
`

export const DivError = styled.div `
    margin-top: 5px;
    display: flex;
    flex-direction: column;
`

