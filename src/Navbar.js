import React from 'react'
 import {Link} from "react-router-dom";
// import Lottie from "lottie-react";
// import manubutton from"./menu.json";
// import closebutton from"./menuclose.json";
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
            <Link to="/projects">Projects</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
          {/* <Lottie className="menuanimation" animationData={closebutton}/> */}
       </ul>
       {/* <Lottie className="menuanimation" animationData={manubutton}/> */}
      </nav>
    </>
  )
}

export default Navbar
