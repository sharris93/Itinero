import { NavLink } from "react-router"
import './Navbar.css'

export default function Navbar(){
  return (
    <header>
      <div className="brand-logo">
        <NavLink to="/">🌍</NavLink>
      </div>
      <nav>
        <NavLink to="/activities/new">Create activity</NavLink>
        <NavLink to="/activities">Activities</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </header>
  )
}