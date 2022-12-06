import Lottie from "lottie-react";
import manusingcomputer from"./manusingcomputer.json";
import {Link} from "react-router-dom";
//import Typed from 'typed.js';
import Navbar from './Navbar';

import "./App.css";


function Home() {
  
 /* var typed = new Typed('.span', {
    Strings:["NAVEEN KUMAR A"],
    typeSpeed:150,
    backSpeed:150,
    loop:true
  });*/

  return (
    <>
     <Navbar></Navbar>
     
      
      <section id="home">
        <div class="main">
          <h1 class="heading">Hello! I'm</h1>
             <br />
            <span className="namenaveen" data-text="Naveen kumar ">Naveen kumar<span>.A</span></span>
            <span className="namenavi" data-text="Naveen kumar ">Naveen kumar<span>.A</span></span>
            <h5 class="paragaraph">
              Ability to work with frontend and backend <br /> Can work well
              under pressure and make the best of any situation.
           </h5>
            <Lottie className="homeanimation" animationData={manusingcomputer}/>
          
         
        </div>
        
      </section>
      
    </>
  );
}

export default Home;
