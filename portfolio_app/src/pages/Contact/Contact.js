import React, { useRef } from "react";
import "./Contact.scss";
import Loader from "react-loaders";
import Delayed from "../../Hooks/Delayed";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Footer from "../../components/Footer/Footer";

function Contact() {
  const refForm = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aknaalm",
        "template_dxlr64u",
        refForm.current,
        "3vaGsiokgtY49001l"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, Please try again");
        }
      );
  };
  return (
    <>
      <Loader type="pacman" />
      <Delayed waitBeforeShow={1000}>
        <div className="contact-main">
          <div className="contact">
            <div className="left-part">
              <h3>CONTACT ME</h3>
              <p>
                👋 I am interested in freelance opportunities - especially
                ambitious or large projects. However, if you have other request
                or question, don't hesitate to contact me using below form
                either.
              </p>
              <div className="contact-form">
                <form ref={refForm} onSubmit={sendEmail}>
                  <ul>
                    <li className="lf-half" style={{ marginRight: "15px" }}>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                      />
                    </li>
                    <li className="lf-half">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                      />
                    </li>
                    <li style={{ width: "100%" }}>
                      <input
                        placeholder="Subject"
                        type="text"
                        name="subject"
                        required
                      />
                    </li>
                    <li>
                      <textarea
                        placeholder="Message"
                        name="message"
                        required
                      ></textarea>
                    </li>
                    <li>
                      <input
                        type="submit"
                        className="flat-button"
                        value="SEND"
                      />
                    </li>
                  </ul>
                </form>
              </div>
            </div>
            <div className="right-part">
              <MapContainer
                center={[30.7073941, 76.7312864]}
                zoom={13}
                scrollWheelZoom={false}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[30.7073941, 76.7312864]}>
                  <Popup>
                    Abhimanyu lives here <br /> Let's have a cup of coffee
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
        <Footer/>
      </Delayed>
    </>
  );
}

export default Contact;
