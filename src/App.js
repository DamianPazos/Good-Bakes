import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavegationBar from './components/NavegationBar/NavegationBar';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';

function App() {
  return (
    <div className='app'>
      <NavegationBar/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;