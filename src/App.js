import logo from './logo.svg';
import './App.css';
//import NavBar from './Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from './Contact';


//import About from './About';

function App() {

  return(
    <>
   <BrowserRouter>
       
          <Routes>
          <Route path="/" element={<Home />}/>
       <Route path="about" element={<About />} />
            <Route path="skill" element={<Skills />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            
          </Routes>
       
      </BrowserRouter>
    </>
 )
}

export default App;
