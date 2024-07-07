import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home,Industries,Capabilities,Carrers} from './Components/pages';
import Contactus from './Components/pages/Contactus';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/industries' element={<Industries/>}/>
        <Route path='/insights' element={<Capabilities/>}/>
        <Route path='/carrers' element={<Carrers/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
