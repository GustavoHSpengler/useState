import './App.css';
import Alterador from './components/Alter';
import Contador from './components/Count';
import TarefasLista from './components/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Alterador />
        <Contador />
        <TarefasLista />
      </header>
    </div>
  );
}

export default App;