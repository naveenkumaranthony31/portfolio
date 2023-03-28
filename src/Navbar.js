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
          <a href="/" target="_blank">Home</a>
         </li>
          <li>
          <a href="about" target="_blank">About</a>
           </li>
          <li>
          <a href="skill" target="_blank">Skills</a>
          </li>
          <li>
          <a href="projects" target="_blank">Projects</a>
           </li>
          <li>
          <a href="contact" target="_blank">Contact</a>
          </li>
          {/* <Lottie className="menuanimation" animationData={closebutton}/> */}
       </ul>
       {/* <Lottie className="menuanimation" animationData={manubutton}/> */}
      </nav>
    </>
  )
}

export default Navbar
