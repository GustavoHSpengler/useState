import './App.css';
import Contador from './components/contador';
import Alterador from './components/alterador';
import Toque from './components/mexa';
import TarefasLista from './components/lista';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Contador />
        <Alterador />
        <Toque />
        <TarefasLista />
      </header>
    </div>
  );
}

export default App;