import React from "react";
//import {Link} from "react-router-dom";
//import Lottie from "lottie-react";
//import skills from "./skills.json";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {fahtml5} from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar';

function Skills() {
  return (
    <>
    <Navbar></Navbar>
    <div class="inner">
      <div class="header">
        <h1>My Skills</h1>
      </div>
      <div class="ctrr">
        <div class="skill-box">
          <div class="skill-title">
            <div class="img">
              <img src="../skillsimg/html-5.png" class="skill-icon" />
            </div>
            <h3>HTML</h3>
            
          </div>
         </div>
        <div class="skill-box">
          <div class="skill-title">
            <div class="img">
              <img src="../skillsimg/css-3.png" class="skill-icon" />
            </div>
            <h3>CSS</h3>
         </div>
         </div>
        <div class="skill-box">
          <div class="skill-title">
            <div class="img">
              <img src="../skillsimg/js.png" class="skill-icon" />
            </div>
            <h3>JS</h3>
          </div>
          </div>
          <div class="skill-box">
          <div class="skill-title">
            <div class="img">
              <img src="../skillsimg/react.png" class="skill-icon" />
            </div>
            <h3>REACT</h3>
          </div>
          </div>
          <div class="skill-box">
          <div class="skill-title">
            <div class="img">
              <img src="../skillsimg/node_js.png" class="skill-icon" />
            </div>
            <h3>NODE JS</h3>
          </div>
          </div>
          <div class="skill-box">
          <div class="skill-title">
            <div class="img">
              <img src="../skillsimg/mongodb.png" class="skill-icon" />
            </div>
            <h3>MONGO DB</h3>
          </div>
          </div>
          <div class="skill-box">
          <div class="skill-title">
            <div class="img">
              <img src="../skillsimg/mysql.png" class="skill-icon" />
            </div>
            <h3>MY SQL</h3>
          </div>
          </div>
          <div class="skill-box">
          <div class="skill-title">
            <div class="img">
              <img src="../skillsimg/Bootstrap.png" class="skill-icon" />
            </div>
            <h3>BOOTSTRAP</h3>
          </div>
          </div>
      </div>
    </div>
    </>
  );
}

export default Skills;
