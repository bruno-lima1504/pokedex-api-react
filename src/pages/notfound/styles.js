import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    height: 800px;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h1 `
        font-size: 40px;
        margin: 10px;
`

export const Text = styled.p `
        font-size: 20px;
        margin: 10px;
`

export const Links = styled.a `
        text-decoration: none;
        font-weight: 700;
        margin: 10px;
        transition: 0,3s ease-in;        

        :hover {
            color: red;
            font-size: 40px;
        }
`
export const Img = styled.img `
    width: 100%;
`



