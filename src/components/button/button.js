import React from "react"


const Button = ({text, attPokemon }) => {
    return (
        <>
        <button onClick={attPokemon}>{text}</button>
        </>
    )
}

export {Button}