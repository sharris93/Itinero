import { NavLink } from "react-router"
import './Navbar.css'

export default function Navbar(){
  return (
    <header>
      <div className="brand-logo">
        <NavLink to="/">🌍</NavLink>
      </div>
      <nav>
        <a href="/activities">Activities</a>
      </nav>
    </header>
  )
}