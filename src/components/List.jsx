import React, { useState } from 'react';

function TarefasLista () {
    const [tarefas, setTarefaLista] = useState([]);
    const [adicionarTarefa, setAdicionar] = useState('');

    const criacao = (e) => {
        e.preventDefault();
        if (adicionarTarefa.trim() !== '') {
            setTarefaLista([...tarefas, adicionarTarefa]); // Adiciona a nova tarefa ao array de tarefas usando spread operator
            setAdicionar('');
        }        
    }

    return (
        <>
            <h1>Lista de Tarefas</h1>
            <form onSubmit={criacao}>
                <input 
                    type="text" 
                    value={adicionarTarefa} 
                    placeholder='Adicionar os itens da lista' 
                    onChange={(e) => setAdicionar(e.target.value)}
                />
                <button type='submit'>Adicionar Tarefa</button>
            </form>  
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ul>
        </>
    )
}

export default TarefasLista;
