import React from "react";
import { useState } from "react";
//import axios from "axios"

export default function Signup() {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [checkPassword, setCheckPassword] = useState(false);

  const handleChange = (e) => {
    console.log(e.target);
    setUser((prev) => ({ ...prev, [e.target.placeholder]: e.target.value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkPassword) {
      fetch("http://localhost:5000/api/signup", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      // {user: userObj, msg: "user added to db", success: true}

      //const data = await axios("http://localhost:5000/api/signup", user)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>username:</div>
        <input
          onChange={handleChange}
          type="text"
          placeholder="username"
          required
        />

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

        <div>confirm password:</div>
        <input
          onChange={(e) =>
            e.target.value === user.password
              ? setCheckPassword(true)
              : setCheckPassword(false)
          }
          type="password"
          placeholder="confirm password"
          required
        />

        <br/>
        <button>Sign-up</button>
      </form>
    </div>
  );
}
