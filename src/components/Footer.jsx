import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMobile,
  FaRocket,
  FaSquareCheck,
  FaRegCopyright,
} from "react-icons/fa6";

import {
  FaEnvelope,
  FaRegCircle,
  FaLaptopCode,
  FaUsers,
  FaHeart,
} from "react-icons/fa";

import { RiTelegram2Fill } from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-contents">
        {/* footer logo */}
        <div className="footer-card footer-logo">
          <a href="#home" class="logo">
            <FaRegCircle />
            educa<span>.</span>
          </a>
          <p>
            Helping students learn better with simple lessons & smart study
            tools.
          </p>
        </div>

        {/* footer quick link */}
        <div className="footer-card footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* footer resources links */}
        <div className="footer-card footer-links">
          <h3>Resources</h3>
          <ul>
            <li>
              <a href="#">Teaching Philosoply</a>
            </li>
            <li>
              <a href="#">Papers</a>
            </li>
            <li>
              <a href="#">Daily Quiz</a>
            </li>
            <li>
              <a href="#">Study Tools</a>
            </li>
            <li>
              <a href="https://www.doenets.lk/examresults">O/L Results</a>
            </li>
            <li>
              <a href="reviews.html">Reviews</a>
            </li>
          </ul>
        </div>

        {/* contact info */}
        <div className="footer-card contact-info">
          <h3>Contact us</h3>
          <h4>Maths Class</h4>
          <a href="tel:+" class="btnx">
            <FaMobile />
            +941234567
          </a>
          <a href="mailto:educa@maths.com">
            <FaEnvelope />
            educa@maths.com
          </a>
          <h4>Science Class</h4>
          <a href="tel:+" class="btnx">
            <FaMobile />
            +941234567
          </a>
          <a href="mailto:educa@science.com">
            <FaEnvelope />
            educa@science.com
          </a>
          <h4>English Class</h4>
          <a href="tel:+" class="btnx">
            <FaMobile />
            +941234567
          </a>
          <a href="mailto:educa@english.com">
            <FaEnvelope />
            educa@english.com
          </a>
        </div>

        {/* footer social media links */}
        <div className="footer-card social-content">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <RiTelegram2Fill />
            </a>
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
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms of Service</a>
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
