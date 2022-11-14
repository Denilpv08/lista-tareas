import './App.css';
import Logo from './components/Logo';
import Lista from './components/Lista';

function App() {
  return (
    <div className="App">
      <Logo />
      <div className='lista-principal'>
        <h1>Mis Tareas</h1>
        <Lista />
      </div>
    </div>
  );
}

export default App;
