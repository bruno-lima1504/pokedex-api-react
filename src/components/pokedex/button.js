import React from "react";

const Button = ({text, addPokemon }) => {
    return (
        <>
        <button onClick={addPokemon}>{text}</button>
        </>
    )
}

export {Button}