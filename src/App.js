import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavegationBar from './components/NavegationBar/NavegationBar';

function App() {
  return (
    <div>
      <NavegationBar/>
      <div>
        <h1>Bienvenido a mi sitio web</h1>
        <p>Este es un ejemplo de una barra de navegación en una aplicación React.</p>
      </div>
    </div>
  );
}

export default App;