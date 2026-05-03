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
        <div className="footer-card footer-logo">
          <a href="/#home" class="logo">
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
                <FaCaretRight /> Academic Resources
              </NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="/#classes">
                <FaCaretRight /> Class Schedule
              </NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="/#teachers">
                <FaCaretRight /> Our Faculty
              </NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="/#about">
                <FaCaretRight /> Why Choose
              </NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="/#contacts">
                <FaCaretRight /> Contact Support
              </NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="/#reviews">
                <FaCaretRight /> Students Feedbacks
              </NavHashLink>
            </li>
            <li>
              <a href="https://www.doenets.lk/examresults">
                <FaCaretRight /> O/L Results
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
                <FaCaretRight /> Smart Study Tools
              </Link>
            </li>{" "}
            <li>
              <Link to="/quizzes">
                <FaCaretRight /> Interactive Quizzes
              </Link>
            </li>{" "}
            <li>
              <Link to="/paper-hub">
                <FaCaretRight /> Past & Target Papers
              </Link>
            </li>{" "}
            <li>
              <Link to="/daily-questions">
                <FaCaretRight /> Daily Mission
              </Link>
            </li>{" "}
          </ul>{" "}
        </div>

        <div className="footer-card footer-contact">
          <h3>Contact Info</h3>
          <p>
            <FaPhone />{" "}
            <a href="tel:+94 77 123 4567" className="contact-link">
              +94 77 123 4567
            </a>
          </p>
          <p>
            <FaEnvelope />{" "}
            <a href="mailto:support@educa.lk" className="contact-link">
              support@educa.lk
            </a>
          </p>
          <p>
            <FaLocationDot /> 123, Education Lane, Colombo
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
              <Link to="/#contact-form" style={{ color: "#ff4b2b" }}>
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
            <FaRocket />
            Version 1.0
          </p>
          <p>
            <FaSquareCheck />
            Verified Links
          </p>
          <p>
            <FaLaptopCode />
            last updated
            <span> 2026 April</span>
          </p>
          <p>
            <FaUsers /> Community reviewed
          </p>
        </div>

        {/* footer copyright info */}
        <div className="footer-card footer-copyrights">
          <p>
            <FaRegCopyright /> {currentYear} All rights reserved.
          </p>
          <p>
            This template is made with{" "}
            <FaHeart style={{ color: "#ff4b2b", margin: "0 5px" }} /> by
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
