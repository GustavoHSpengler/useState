import React, { useState } from 'react';

function TarefasLista () {
    const [itens, setTarefaLista] = useState([])
    const [adicionarTarefa, setAdicionar] = useState('')

    const criacao = () => {
        
    }

    return (
        <>
            <br/>
            <h1> Lista de Taredas </h1>
            <form>
                <input type="text" value={adicionarTarefa} placeholder='Adicionar os itens da lista'/>
                <button type='submit' onClick={criacao}> Alterar Texto </button>
                <ul> <li /> </ul>
            </form>  
        </>
    )
}

export default TarefasLista;