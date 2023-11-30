import React, { useState } from "react";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [isHovering, setIsHovering] = useState("");
  const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
      console.log(setIsHovering);
    };
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

      <div className="nav-butn" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><FaBars />
      {isHovering && (
              <div className="hover-btn">
              {/* <li onClick={handleMouseOut} style={{alignSelf:"flex-end", marginRight:"40px"}}>&times;</li> */}
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
              </div>
      )}
      </div>
    </div>
  );
}

export default Navbar;
