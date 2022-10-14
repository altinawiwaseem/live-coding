import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

function App() {

  const [message, setMessage] = useState('')



  const handleSave = async () => {

    console.log("🚀 ~ handleSave ~ button clicked")

    const response = await axios.post('/posts/add', {message, user: 'E11'})
    console.log("🚀 ~ handleSave ~ response", response)

    
  }

  const menu = [
    <Link to='/'><li>Home</li></Link>,
    <Link to='/register'><li>Register</li></Link>,
    <Link to='/link'><li>Login</li></Link>,
  ]

  return (
    <div className="App">

      {
        menu
      }
      
     <textarea value={message} onChange={e => setMessage(e.target.value)}/>

     <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default App;
