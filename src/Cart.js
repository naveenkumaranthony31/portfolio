import React from "react";

//import myProjects from "./Projects";
import { Link } from "react-router-dom";
//import { Player } from "@lottiefiles/react-lottie-player";
function Cart({item}) {
  return (
    <>
      <div className="col-lg-4">
        {
          item.isEnable? <div class="card" style={{ width: "18rem" }}>
          <img src={`${item.animation}`} alt="..." />
          <div class="card-body">
            <h5 class="card-title">{item.projectName}</h5>
          <button class="liveproject"><a href={item.app} class="livein" target="_blank" ><h4>Live</h4></a></button>
          <br></br>
          <button class="liveproject1"><a href={item.frontend} target="_blank" class="livein1"><h5>Front-End</h5></a></button>
          <button class="liveproject1"><a href={item.backend} target="_blank" class="livein1"><h5>Back-End</h5></a></button>
            </div>
        </div>:<div class="card" style={{ width: "18rem" }}>
          <img src={`${item.animation}`} alt="..." />
          <div class="card-body">
            <h5 class="card-title">{item.projectName}</h5>
          <button class="liveproject"><a href={item.app} class="livein" target="_blank" ><h4>Live</h4></a></button>
          <br></br>
          <button class="liveproject2"><a href={item.frontend} target="_blank" class="livein1"><h5>Front-End</h5></a></button>
          </div>
        </div>
        }
       
      </div>
    </>
  );
}

export default Cart;
