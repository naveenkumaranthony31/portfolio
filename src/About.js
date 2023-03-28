import React from "react";
import Lottie from "lottie-react";
import cycling from "./cycling.json";
// import instagram from "./instagram.json";
import github from "./github.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
//import { faLinkedin } from '@fortawesome/free-solid-svg-icons'

// import Facbook from "./facebook.json";
import Navbar from "./Navbar";

//import {Link} from "react-router-dom";
function About() {
  return (
    <>
      <Navbar></Navbar>
      <div className="conatainer">
        <div className="row">
          <div className="col-lg-6">
            <Lottie className="aboutanimation" animationData={cycling} />
          </div>
          <div className="col-lg-6 ">
            <div className="details">
              <h2>
                <span className="abt">About Me</span>
              </h2>
              <p className="parah">
                I Started off my self-learning journey with online tutorials
                Google, YouTube, etc and took a step further and Enrolled in the
                GUVI IIT MADRAS Fullstack developer Program which involved
                extensive programming and real world projects. Later, I learned
                MERN Stack From Guvi and built an Website using React JS, Node,
                Express Js, MongoDB.
              </p>
              <p className="parah">
                I am a electrical engineer but i am intrested to change my carrer in Fullstack development side.
              </p>
              <div className="col-lg mt-auto ins-fac">
              <div className="social-icons1">
                <a
                  href="https://github.com/naveenkumaranthony31"
                  target="_blank"
                  class="aboutimg"
                >
                  <FontAwesomeIcon class="aboutimg" icon={faGithub} />
                </a>
                <a
                  href="https://www.linkedin.com/messaging/thread/2-YTVkMzMxZWItZjVkYi00YzQ2LWI1MmEtZmQ4ZTU5MzYzMDFmXzAxMA==/"
                  target="_blank"
                  
                >
                  <FontAwesomeIcon class="aboutimg1" icon={faLinkedin} />
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
