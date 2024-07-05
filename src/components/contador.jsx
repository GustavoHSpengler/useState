import React, { useState } from 'react';

function Contador () {
    let [contador, setContador] = useState(0);

    let incrementar = () => {
        setContador(contador++);
    }

    return (
        <>
            <h1> Contador: {contador} </h1>
            <button onClick={incrementar}> Incrementar </button>
        </>
    );
}

export default Contador;