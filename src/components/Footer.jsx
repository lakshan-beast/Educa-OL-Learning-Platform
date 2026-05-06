import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaRocket,
  FaSquareCheck,
  FaRegCopyright,
  FaWhatsapp,
  FaYoutube,
  FaCaretRight,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

import { FaEnvelope, FaLaptopCode, FaUsers, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-contents">
        {/* footer logo */}
        <div className="footer-card ">
          <a href="#home" className="header-logo footer-logo">
            <div className="logo-circle">E</div>educa<span>.</span>
          </a>
          <p>
            Helping students learn better with simple lessons & smart study
            tools.
          </p>

          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://wa.me" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* footer quick link */}
        <div className="footer-card footer-links">
          <h3>Quick Navigation</h3>
          <ul>
            <li>
              <NavHashLink smooth to="/#resources">
                <FaCaretRight className="footer-icon" /> Academic Resources
              </NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="/#classes">
                <FaCaretRight className="footer-icon" /> Class Schedule
              </NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="/#teachers">
                <FaCaretRight className="footer-icon" /> Our Faculty
              </NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="/#about">
                <FaCaretRight className="footer-icon" /> Why Choose
              </NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="/#contacts">
                <FaCaretRight className="footer-icon" /> Contact Support
              </NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="/#reviews">
                <FaCaretRight className="footer-icon" /> Students Feedbacks
              </NavHashLink>
            </li>
            <li>
              <a href="https://www.doenets.lk/examresults">
                <FaCaretRight className="footer-icon" /> O/L Results
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-card footer-links">
          {" "}
          <h3>Study Resources</h3>{" "}
          <ul>
            <li>
              <Link to="/tools">
                <FaCaretRight className="footer-icon" /> Smart Study Tools
              </Link>
            </li>
            <li>
              <Link to="/quizzes">
                <FaCaretRight className="footer-icon" /> Interactive Quizzes
              </Link>
            </li>{" "}
            <li>
              <Link to="/paper-hub">
                <FaCaretRight className="footer-icon" /> Past & Target Papers
              </Link>
            </li>{" "}
            <li>
              <Link to="/daily-questions">
                <FaCaretRight className="footer-icon" /> Daily Mission
              </Link>
            </li>{" "}
          </ul>{" "}
        </div>

        <div className="footer-card footer-contact">
          <h3>Contact Info</h3>
          <p>
            <a href="tel:+94 77 123 4567" className="contact-link">
              <FaPhone className="footer-icon" /> +94 77 123 4567
            </a>
          </p>
          <p>
            <a href="mailto:support@educa.lk" className="contact-link">
              <FaEnvelope className="footer-icon" /> support@educa.lk
            </a>
          </p>
          <p>
            <FaLocationDot className="footer-icon" /> 123, Education Lane,
            Colombo
          </p>

          <div
            className="subject-contacts"
            style={{
              marginTop: "15px",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: "10px",
            }}>
            <p style={{ fontSize: "0.8rem" }}>
              For subject specific help, use our{" "}
              <Link
                to="/#contact-form"
                style={{
                  color: "#ff4b2b",
                  backgroundColor: "#ffefec",
                  padding: "6px 12px",
                  textAlign: "center",
                  borderRadius: "5px",
                }}>
                Contact Form
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* footer bottom section  */}
      <div className="footer-contents footer-bottom" id="footer-bottom">
        {/* footer legels  */}
        <div className=" footer-card footer-legels">
          <h3>Legal</h3>
          <ul>
            <li>
              <NavHashLink smooth to="/#privacy">
                Privacy Policy
              </NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="/#terms">
                Terms of Service
              </NavHashLink>
            </li>
          </ul>
        </div>

        {/* footer badge level */}
        <div className="footer-card badge-levelup">
          <h3>for Sri Lanka | O/L Students</h3>
          <p>
            <FaRocket className="footer-icon" />
            Version 1.0
          </p>
          <p>
            <FaSquareCheck className="footer-icon" />
            Verified Links
          </p>
          <p>
            <FaLaptopCode className="footer-icon" />
            last updated
            <span> 2026 April</span>
          </p>
          <p>
            <FaUsers className="footer-icon" /> Community reviewed
          </p>
        </div>

        {/* footer copyright info */}
        <div className="footer-card footer-copyrights">
          <p>
            <FaRegCopyright /> {currentYear} All rights reserved.
          </p>
          <p>
            This template is made with <FaHeart /> by
            <a
              href="http://github.com/lakshan-beast"
              target="_blank"
              rel="noopener noreferrer">
              Lakshan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
