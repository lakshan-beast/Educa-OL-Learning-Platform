import { useState } from "react";
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

// import { NavHashLink } from 'react-router-hash-link';
// import { Link } from 'react-router-dom';
// import {
//   FaSquareCheck, FaLaptopCode, FaUsers, FaRegCopyright, FaHeart,
//   FaFacebook, FaWhatsapp, FaYoutube, FaPhone, FaEnvelope, FaLocationDot,
//   FaCaretRight, FaUser, FaKey, FaCopy, FaCheck
// } from "react-icons/fa6";

import { FaEnvelope, FaLaptopCode, FaUsers, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // ID Generator Popup එක පාලනය කරන State
  const [showGenModal, setShowGenModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    pin: "",
    maths: false,
    english: false,
    science: false,
  });
  const [generatedID, setGeneratedID] = useState("");
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ID එක හදන රටාව (Grade 11 විතරක් නිසා කෙලින්ම 11 දැම්මා)
  const handleGenerate = (e) => {
    e.preventDefault();
    let subCode = "";
    if (formData.maths) subCode += "m";
    if (formData.english) subCode += "e";
    if (formData.science) subCode += "s";

    if (!subCode) {
      alert("Please select at least one subject!");
      return;
    }

    const cleanName = formData.name.replace(/\s+/g, "").toUpperCase();
    const finalID = `EDU-${subCode.toUpperCase()}-11-${cleanName}-${formData.pin}`;
    setGeneratedID(finalID);
    setCopied(false);
  };

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

        {/* footer links  */}
        <div className="footer-card footer-links">
          <h3>Study Resources</h3>
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
            </li>
            <li>
              <Link to="/paper-hub">
                <FaCaretRight className="footer-icon" /> Past & Target Papers
              </Link>
            </li>
            <li>
              <Link to="/daily-questions">
                <FaCaretRight className="footer-icon" /> Daily Mission
              </Link>
            </li>
          </ul>
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
              For subject specific help, use our
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

        <span
          onClick={() => setShowGenModal(true)}
          style={{
            cursor: "pointer",
            // color: "rgba(255,255,255,0.7)",
            color: "#ff4b2b",
            backgroundColor: "#ffefec",
            padding: "6px 12px",
            textAlign: "center",
            borderRadius: "5px",
          }}
          className="secret-gen-link">
          <FaCaretRight /> Generate Student ID
        </span>
      </div>

      {/* footer bottom section  */}
      <div className="footer-contents footer-bottom" id="footer-bottom">
        {/* footer legels  */}
        <div className=" footer-card footer-legels">
          <h3>Legal</h3>
          <ul>
            <li>
              <NavHashLink smooth to="/#privacy">
                <FaCaretRight className="footer-icon" /> Privacy Policy
              </NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="/#terms">
                <FaCaretRight className="footer-icon" /> Terms of Service
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
            <span> 2026 May</span>
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

      {/* {showGenModal && (
        <div className="login-overlay" onClick={() => { setShowGenModal(false); setGeneratedID(''); }}>
          <div className="login-modal-box" onClick={(e) => e.stopPropagation()} style={{ background: 'white', padding: '30px', borderRadius: '20px', maxWidth: '400px', width: '100%' }}>
            <button className="close-x" onClick={() => { setShowGenModal(false); setGeneratedID(''); }} style={{ position: 'absolute', top: '10px', right: '20px', background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer' }}>&times;</button>
            
            <h3 style={{ color: '#26136d', marginBottom: '10px' }}>Generate Student ID</h3>
            <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '20px' }}>Enter your details. Give the generated ID to your class card marker for activation.</p>

            <form onSubmit={handleGenerate} className="styled-form">
              <div className="input-group" style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '5px' }}><FaUser /> Your Name (One Word)</label>
                <input type="text" name="name" placeholder="ex: LAKSHAN" required onChange={handleChange} value={formData.name} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }} />
              </div>

              <div className="input-group" style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '5px' }}>Select Enrolled Subjects</label>
                <div style={{ display: 'flex', gap: '15px', marginTop: '5px', fontSize: '0.9rem' }}>
                  <label><input type="checkbox" name="maths" onChange={handleChange} /> Maths</label>
                  <label><input type="checkbox" name="english" onChange={handleChange} /> English</label>
                  <label><input type="checkbox" name="science" onChange={handleChange} /> Science</label>
                </div>
              </div>

              <div className="input-group" style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '5px' }}><FaKey /> Create 4-Digit PIN</label>
                <input type="text" name="pin" maxLength="4" placeholder="ex: 0305" required onChange={handleChange} value={formData.pin} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }} />
              </div>

              <button type="submit" className="contact-submit-btn" style={{ width: '100%', padding: '12px', background: '#26136d', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                Generate ID
              </button>
            </form>

            {generatedID && (
              <div style={{ marginTop: '20px', padding: '15px', background: '#f4f7ff', borderRadius: '12px', border: '1px dashed #4b6bfb', textAlign: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: '#555', fontWeight: 'bold' }}>YOUR STUDENT ID:</span>
                <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#26136d', margin: '8px 0', letterSpacing: '0.5px' }}>{generatedID}</div>
                

                <button onClick={() => { navigator.clipboard.writeText(generatedID); setCopied(true); setTimeout(() => setCopied(false), 2000); }} style={{ width: '100%', padding: '8px', background: '#eef2ff', border: '1px solid #4b6bfb', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', color: '#4b6bfb' }}>

                {copied ? "✓ Copied!" : "Copy Student ID"}
                </button>
                </div>
            )} */}
      {/* </div> */}
      {/* // </div> */}
    </footer>
  );
};

export default Footer;
