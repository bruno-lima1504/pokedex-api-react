import styled from "styled-components";


export const HeaderContainer = styled.nav `    
    background-color: rgba(8,34,78,.9);
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 40px;  
    align-items: center;
    box-sizing: border-box;
    margin: 0 auto;

    @media (max-width: 700px){
        flex-direction: column;
        height: 100%;
        padding: 20px;
        }
`

export const Ul = styled.ul `
       list-style: none;
       display: flex;
       width: 100%;
       align-items: center;       
`

export const Li = styled.li `
        background-color: #0e6f9f;        
        margin: 20px;
        padding: 10px;
        text-decoration: none;
        border-radius: 5px;
        cursor: pointer;
        transition: 0,4s ease-in;
        color: #FFF;
        font-weight: 600;

        :hover {
            background-color: rgba(8,34,78,.9);
        }

        @media (max-width: 700px){
            margin: 10px;
        }              
`

export const Link = styled.a `
    text-decoration: none;

    :visited {
    color: #FFF;
}
`