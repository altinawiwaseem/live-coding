import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div style={{height: "75px", color:"#fff", backgroundColor: "#000", display: "flex", justifyContent: "space-evenly", alignItems: "center"}} >
    
    <NavLink className="navBtn" to={"/"}> Home </NavLink>
    <NavLink className="navBtn" to={"/signup"}> Signup </NavLink>
    <NavLink className="navBtn" to={"/Login"}> Login </NavLink>
    
    </div>
  )
}
