import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="navbar">
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/skill">Skills</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
          <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
