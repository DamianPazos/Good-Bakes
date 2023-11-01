import NavegationBar from './components/NavegationBar/NavegationBar';
import Footer from './components/Footer/Footer';
import WorkingPage from './components/WorkingPage/WorkingPage';
import './App.css';

function App() {
  return (
    <div className='app'>
      <NavegationBar/>
      <WorkingPage/>
      <Footer/>
    </div>
  );
}

export default App;