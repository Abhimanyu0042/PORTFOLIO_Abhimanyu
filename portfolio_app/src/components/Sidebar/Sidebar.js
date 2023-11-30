// import React from 'react'
// import "./Sidebar.scss";
// import { Link, NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome,faUser,faBrain,faPen,faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// function Sidebar() {
//   return (
//     <div className='nav-bar'>
//         <Link className='logo' to="/">
//             <img src="https://media.istockphoto.com/id/1303294170/vector/a-logo-style-shape.jpg?s=612x612&w=0&k=20&c=wrfyDctOpp2rAzWrGG-ualEmF9qQcA2Tnv3AHpgN6-s=" alt="logo" srcset="" />
//         </Link>
//         <nav>
//             <NavLink exact="true" activeclassname="active" to="/" className="navLinks">
//                <FontAwesomeIcon icon={faHome} color="white"/>
//             </NavLink>
//             <NavLink exact="true" activeclassname="active" to="/about" className="navLinks">
//                <FontAwesomeIcon icon={faUser} color="white"/>
//             </NavLink>
//             <NavLink exact="true" activeclassname="active" to="/skills" className="navLinks">
//                <FontAwesomeIcon icon={faBrain} color="white"/>
//             </NavLink>
//             <NavLink exact="true" activeclassname="active" to="/projects" className="navLinks">
//                <FontAwesomeIcon icon={faPen} color="white"/>
//             </NavLink>
//             <NavLink exact="true" activeclassname="active" to="/contact" className="navLinks">
//                <FontAwesomeIcon icon={faPhone} color="white"/>
//             </NavLink>
//         </nav>
//         <div className='contact-nav-links'>
//             <li>
//                 <a href="https://www.linkedin.com/in/abhimanyu-kashyap-1022ab220/">
//                 <FontAwesomeIcon icon={faLinkedin} color='white'/>
//                 </a>
//             </li>
//             <li>
//                 <a href="https://github.com/Abhimanyu0042">
//                 <FontAwesomeIcon icon={faGithub} color='white'/>
//                 </a>
//             </li>
//             <li><FontAwesomeIcon icon={faInstagram} color='white'/></li>
//         </div>
//     </div>
//   )
// }

// export default Sidebar