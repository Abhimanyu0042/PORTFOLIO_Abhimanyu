import React, { useState } from "react";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


function Navbar() {
  const [openSlider, setOpenSlider] = useState("false");
    const navigate = useNavigate();
  return (
    <div className="Navbar">
      <h4>Abhi.dev</h4>
      <nav>
        <li onClick={() => {
            navigate("/")
        }}>
            Home
        </li>
        <li onClick={()=> {
            navigate("/about")
        }}>
            About
        </li>
        <li onClick={()=>{
            navigate("/skills")
        }}>Skills</li>
        <li onClick={() => {
            navigate("/projects")
        }}>Projects</li>
        <li onClick={()=>{
          navigate("/contact")
        }}>Contact</li>
      </nav>

      <div className="nav-butn" onClick={()=> setOpenSlider(!openSlider)}>{openSlider ? <IoClose/> : <FaBars />}
      {openSlider && (
              <div className="hover-btn">
                <hr style={{width: "100%"}}></hr>              
              <li onClick={() => {
                    navigate("/")
                }}>
                    Home
                </li>
                <li onClick={()=> {
                    navigate("/about")
                }}>
                    About
                </li>
                <li onClick={()=>{
                    navigate("/skills")
                }}>Skills</li>
                <li onClick={() => {
                    navigate("/projects")
                }}>Projects</li>
                <li onClick={()=>{
                  navigate("/contact")
                }}>Contact</li>
                                <hr style={{width: "100%"}}></hr>              

              </div>
      )}
      </div>
    </div>
  );
}

export default Navbar;
