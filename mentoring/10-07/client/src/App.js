import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios'

function App() {

  const [message, setMessage] = useState('')

  const handleSave = async () => {

    console.log("🚀 ~ handleSave ~ button clicked")

    // const settings = {
    //   method: 'POST',
    //   body: message,
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }

    const response = await axios.post('/posts/add', {message, user: 'E11'})
    console.log("🚀 ~ handleSave ~ response", response)

    
  }

  return (
    <div className="App">
     <textarea value={message} onChange={e => setMessage(e.target.value)}/>

     <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default App;
