
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Moviedetails from './components/moviedeatils/Moviedetails';
import PageNot from './components/pagenotfound/PageNot';
// import Footer from './components/footer/footer';
import Footerr from './components/footerr/Footerr';
import Moviecart from './components/moviecart/Moviecart';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='*' element={<PageNot/>}/>
    <Route path='/movie/:imdbID' element={<Moviedetails/>}/>
  <Route path='/cart' element={<Moviecart/>}/>


    
   
    </Routes>
  <Footerr/>
    </BrowserRouter>
  );
}

export default App;
