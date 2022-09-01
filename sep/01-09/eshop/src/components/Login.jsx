import React from "react";
import { useState } from "react";
//import axios from "axios"

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });


  const handleChange = (e) => {
    console.log(e.target);
    setUser((prev) => ({ ...prev, [e.target.placeholder]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      fetch("http://localhost:5000/api/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      // {user: userObj, msg: "user added to db", success: true}

      //axios.post("http://localhost:5000/api/login", user)
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div>email:</div>
        <input
          onChange={handleChange}
          type="email"
          placeholder="email"
          required
        />

        <div>password:</div>
        <input
          onChange={handleChange}
          type="password"
          placeholder="password"
          required
        />

        <br/>
        <button>Login</button>
      </form>
    </div>
  );
}
