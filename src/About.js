import React from "react";
import Lottie from "lottie-react";
import cycling from "./cycling.json";
// import instagram from "./instagram.json";
import github from "./github.json";
import { useNavigate } from "react-router-dom";

// import Facbook from "./facebook.json";
import Navbar from './Navbar';

//import {Link} from "react-router-dom";
 function About() {
  const navigate = useNavigate();
  navigate("/About");
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
           <ul class="list">
            <li className="li">Dgree<span class="empty">  :</span> <span className="mainli">BACHELOR OF ENGINEERING</span></li>
            <li className="li">Department<span class="empty">  :</span> <span className="mainli">ELECTRICAL AND ELCTRONICS ENGINEERING</span></li>
            <li className="li">Languages known <span className="mainli">TAMIL,ENGLISH </span></li>
            <li className="li">I am from <span className="mainli">TRICHY,TAMILNADU </span></li>
           </ul>
           <div className="col-lg mt-auto ins-fac">
           <Lottie className="aboutanimation animation2"  onClick={() =>
                  window.open(
                    "https://github.com/naveenkumaranthony31?tab=repositories",
                    "_blank")} animationData={github} />
           
           {/* <Lottie className="aboutanimation"  onClick={() =>
                  window.open(
                    "https://www.instagram.com/naveenthiwary20/",
                    "_blank")} animationData={instagram} />
                     <Lottie className="aboutanimation animation2"  onClick={() =>
                  window.open(
                    "https://www.facebook.com/profile.php?id=100004804560166",
                    "_blank")} animationData={Facbook} /> */}
                   </div>
            </div>
            
          </div>
        </div>
      </div>
      </>
  );
}
export default About;
