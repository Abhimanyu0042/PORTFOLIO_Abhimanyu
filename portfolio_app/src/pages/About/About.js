import React from 'react'
import "./About.scss";
import Loader from 'react-loaders';
import Delayed from '../../Hooks/Delayed';
import Footer from '../../components/Footer/Footer';

function About() {
  return (
    <>
    <Delayed waitBeforeShow={1000}>
    <div className='about-us'>
        <div className="about-main">
            <div className="left">
                <img src="https://images.pexels.com/photos/441963/pexels-photo-441963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" />
            </div>
            <div className="right">
                <h3>ABOUT ME</h3>
                <p className='about-head'>
                    A dedicated Full Stack Developer based in Chandigarh,India📍
                </p>
                <p>As a junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind and scss. I excel in designing and mantaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge
 development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
            </div>
        </div>
    </div>
    <Footer/>
    </Delayed>
    <Loader type='pacman'/>
    </>
  )
}

export default About