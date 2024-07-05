import React, { useState } from 'react';

function Alterador () {
    let [texto, setAlterador] = useState(true)

    let alterador = () => {
        setAlterador(!texto)
    }

    return (
        <>
            <br/>
            {texto ? <h1> Ola </h1> : <h1> Hello </h1> } 
            <button onClick={alterador}> Alterar Texto </button>
        </>
    )
}

export default Alterador;