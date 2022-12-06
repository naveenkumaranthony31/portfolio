import React from 'react'
import Cart from './Cart'
import Navbar from './Navbar'
//import {Link} from "react-router-dom";
function Projects() {
    const myProjects = [
        
        {
          id: 1,
         projectName: `Mobile-Shopping`,
         animation:"../projects/mobile-shopping.gif",
         app:"https://leafy-crisp-b8111f.netlify.app/",
         
        },
       
        {
            id: 2,
            projectName: 'Simple Booking App',
            animation:"../projects/movie.gif",
            app:"https://guvi-hackathon2-frontend-dun.vercel.app/"
            
            
          },
          {
            id: 3,
            projectName: 'Admin Page',
            animation:"../projects/admin.gif",
            app:"https://super-sherbet-e5a4b0.netlify.app/"
            
            
          }
          
        ]
     
  return (
    <>
    <Navbar></Navbar>
    <div className='mian'>
    <h1 className='proheading'>PROJECTS</h1>
    <div className="container">
        <div className="row">
          
      {myProjects.map((item) => {
                return<Cart item={item}></Cart>
            })}
    </div>
    </div>
    </div>
    </>
  )
}

export default Projects;

