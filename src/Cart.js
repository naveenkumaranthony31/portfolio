import React from "react";

//import myProjects from "./Projects";
import { Link } from "react-router-dom";
//import { Player } from "@lottiefiles/react-lottie-player";
function Cart({item}) {
  return (
    <>
      <div className="col-lg-4">
        <div class="card" style={{ width: "18rem" }}>
          <img src={`${item.animation}`} alt="..." />
          <div class="card-body">
            <h5 class="card-title">{item.projectName}</h5>
           <a href={item.app} target="_blank" class="viewproject">
              <h3>View Project</h3>
            </a>
         
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
