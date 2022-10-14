import { useState } from "react";
import axios from 'axios'

function Register() {

    const [data, setData] = useState({
        name: '',
        email: '',
        pass: ''
    })

    const handleSave = async () => {
        
        try {
            
            const response = await axios.post('/users/register', data)
            console.log("🚀 ~ handleSave ~ response", response)

            

        } catch (error) {
            
            console.log('Error registering', error.message)
        }

    }

    return ( 
    <div className="bg-sky-100 
    flex 
    justify-center 
    items-center 
    flex-col
    md:text-green-500
    w-[100%]
    
    h-[100vh]">

        <div className="
            flex 
            justify-center 
            item-center 
            flex-col
            
            w-[400px]
            gap-[20px]
        ">

        <input placeholder="type your username" value={data.name} onChange={e => setData({...data, name: e.target.value})}/>
        <input placeholder="type your email" value={data.email} onChange={e => setData({...data, email: e.target.value})}/>
        <input placeholder="type your pass" value={data.pass} onChange={e => setData({...data, pass: e.target.value})}/>

        <button onClick={handleSave}>Register</button>
        </div>
    </div> );
}

export default Register;