import { Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
    
    <Header/>
 
     <Routes>
       <Route path='/signup' element={ <Signup/>} />
       <Route path='/' element={<Home/>} />
       <Route path='/login' element={<Login/>} /> 
     </Routes>

    </div>
  );
}

export default App;
