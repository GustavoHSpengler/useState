import React, { useState } from 'react';

function TarefasLista () {
    const [tarefas, setTarefaLista] = useState([])
    const [adicionarTarefa, setAdicionar] = useState('')

    const criacao = (e) => {
        e.preventDefault();
        if (adicionarTarefa.trim() !== '') {
            setTarefaLista([tarefas, adicionarTarefa]);
            setAdicionar('');
        }        
    }

    return (
        <>
            <br/>
            <h1> Lista de Tarefas </h1>
            <form onSubmit={criacao}>
                <input type="text" value={adicionarTarefa} placeholder='Adicionar os itens da lista' onChange={(e) => (setAdicionar(e.target.value))}/>
                <button type='submit' onClick={criacao}> Alterar Texto </button>
                <ul> <li key={tarefas}> {tarefas} </li> </ul>
            </form>  
        </>
    )
}

export default TarefasLista;