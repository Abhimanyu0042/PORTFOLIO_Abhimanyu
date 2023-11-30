import React from "react";
import "./Project.scss";
import weatherify from "../../assets/weatherify.png";
import newsApp from "../../assets/NewsApp.png";
import appliances from "../../assets/Appliances.png";
import ReactFloaterJs from "react-floaterjs";
import {
    FaCss3,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
  FaServer,
} from "react-icons/fa";
import Delayed from "../../Hooks/Delayed";
import Loader from "react-loaders";
import Footer from "../../components/Footer/Footer";

function Projects() {
  return (
    <>
    <Loader type="pacman"/>
    <Delayed waitBeforeShow={1000}>
            <div className="projects-page">
      <div className="projects-main">
        <h3>PORTFOLIO</h3>
        <p className="heading-para">
          Each project is a unique piece of development🚀
        </p>
        <div className="project-item animating1">
          <div className="left">
            <ReactFloaterJs>
              <img src={weatherify} alt="" srcset="" />
            </ReactFloaterJs>
          </div>
          <div className="right">
            <p className="about-head">
              Weather application made using HTML, CSS3 and CSS5, JavaScript
              with OpenWeather API
            </p>
            <p>
              We can get accurate and up-to-date weather information for your
              location, including temperature, humidity, wind speed, and more.
              Also we can experience the weather visually with dynamic
              backgrounds that change based on current conditions, such as sunny
              skies, rainy days, or snowy landscapes. I have also made it
              responsive so that it can be used on any device.
            </p>
            <p className="tech-used">
              <FaSass /> <FaHtml5 /> <FaJs />
            </p>
            <div className="buttons">
              <button className="getcode">
                Get Code <FaGithub />{" "}
              </button>
              <button className="watchSite">
                {" "}
                Live Demo <FaServer />
              </button>
            </div>
          </div>
        </div>
        <div className="project-item animating2">
          <div className="right">
            <p className="about-head">
              News Application made using reactJs and News API
            </p>
            <p>
              I made a Live updating web news application with a provision to
              read today's headlines. I have also added Search bar provided to
              search for news of your own interest.
            </p>
            <p className="tech-used">
              <FaReact /> <FaSass /> <FaHtml5 /> <FaJs />
            </p>
            <div className="buttons">
              <button className="getcode">
                Get Code <FaGithub />{" "}
              </button>
              <button className="watchSite">
                {" "}
                Live Demo <FaServer />
              </button>
            </div>
          </div>
          <div className="left rev-item">
            <ReactFloaterJs>
              <img src={newsApp} alt="" srcset="" />
            </ReactFloaterJs>
          </div>
        </div>
        <div className="project-item animating1">
          <div className="left">
            <ReactFloaterJs>
              <img src={appliances} alt="" srcset="" />
            </ReactFloaterJs>
          </div>
          <div className="right">
            <p className="about-head">
              ELECTRONICS ECOMMERCE WEBSITE - Frontend project made using HTML,
              CSS5 and JavaScript
            </p>
            <p>
              I have made 20 pages with specific category page. i have tried to make color pallet as simple as possible, keeping in needs of diiferent user base. I have also made
              Payment Gateway with option to choose mode of payment, Also it can be used on all devices i.e. its a cross-platform application. Single product pages and eye-pleasing scroll animations are also implemented to give whole project more functional value. Intuitive
              user experience with minimal UI
            </p>
            <p className="tech-used">
              <FaCss3 /> <FaHtml5 /> <FaJs />
            </p>
            <div className="buttons">
              <button className="getcode">
                Get Code <FaGithub />{" "}
              </button>
              <button className="watchSite">
                {" "}
                Live Demo <FaServer />
              </button>
            </div>
          </div>
        </div>
        <div className="project-item animating2 rev-item2">
          <div className="right">
            <p className="about-head">
              Full Stack major project - Socialite 
            </p>
            <p>
              I Designed and implemented a feature-rich social media platform using cutting-edge technologies to provide users with a seamless and engaging experience. Leveraged React.js for the front-end, Node.js for the back-end, MongoDB for database management, and Sass for styling.
              I implemented secure user authentication features allowing seamless login and signup functionalities. Utilized JSON Web Tokens (JWT) for secure session management.I developed a robust friendship system enabling users to connect and follow their friends. Also there's an integrated real-time notifications to keep users informed about their friends' activities.
              I implemented a dynamic post interaction system, allowing users to create, like, and comment on posts. Utilized MongoDB for efficient data storage and retrieval.
            </p>
            <p className="tech-used">
              <FaReact /> <FaSass /> <FaHtml5 /> <FaJs /> <FaNodeJs/> <FaDatabase/>
            </p>
            <div className="buttons">
              <button className="getcode">
                Get Code <FaGithub />{" "}
              </button>
              <button className="watchSite">
                {" "}
                Live Demo <FaServer />
              </button>
            </div>
          </div>
          <div className="left  rev-item">
            <ReactFloaterJs>
              <img src={newsApp} alt="" srcset="" />
            </ReactFloaterJs>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </Delayed>
    </>

  );
}

export default Projects;
