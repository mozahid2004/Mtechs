import React, { useEffect } from "react";
import "./Home.css";
import myImage from "../assets/MyAboutPic.png";
import SocialMedia from "../components/SocialMedia";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";


const Home = () => {
  useEffect(() => {
    const texts = ["Web Developer", "Entrepreneur"];
    const typingEl = document.querySelector(".typing-text");
    let index = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;

    const typeEffect = () => {
      currentText = texts[index];

      if (!isDeleting) {
        typingEl.textContent = currentText.slice(0, charIndex++);
      } else {
        typingEl.textContent = currentText.slice(0, charIndex--);
      }

      if (charIndex === currentText.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
      }

      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
      }

      setTimeout(typeEffect, isDeleting ? 60 : 120);
    };

    typeEffect();
  }, []);

  return (
    <section id="home" className="home">
      {/* LEFT SIDE */}
      <div className="home-left">
        <div className="image-border">
          <img src={myImage} alt="My Photo" className="home-img" />
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="home-right">
        <SocialMedia />
        <h1>
          I Am a <span className="typing-text"></span>
        </h1>

        <p className="home-text">
          I help businesses grow by building fast, modern, scalable websites.
          I create digital solutions that improve your online presence, attract
          customers, and increase your revenue.
        </p>


        <div className="button-group">
          <a href="tel:+918260760349" className="call-btn"> <FaPhoneAlt className="btn-icon" /> Call</a>
      
          <a className="whatsapp-btn"
            href="https://wa.me/918260760349"
            target="_blank"
            rel="noopener noreferrer"
          ><FaWhatsapp className="btn-icon" />WhatsApp</a>
        </div>


      </div>


    </section>
  );
};

export default Home;
