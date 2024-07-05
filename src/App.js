import './App.css';
import Contador from './components/contador';
import Alterador from './components/alterador';
import Toque from './components/mexa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Contador />
        <Alterador />
        <Toque />
      </header>
    </div>
  );
}

export default App;