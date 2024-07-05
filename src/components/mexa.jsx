import React, { useState } from 'react';

function Toque () {
    let [mexerTexto, setToque] = useState(true)

    let alternar = () => {
        setToque(!mexerTexto)
    }

    return (
        <>
            <br/>
            {mexerTexto ? <h1> Texto A </h1> : <h1> Texto B </h1> } 
            <button onClick={alternar}> Alterar Texto </button>
        </>
    )
}

export default Toque;