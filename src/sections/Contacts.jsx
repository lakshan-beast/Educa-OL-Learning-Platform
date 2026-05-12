import { useState } from "react";
import { FaMobile, FaEnvelope } from "react-icons/fa6";
import { GiEarthAsiaOceania } from "react-icons/gi";

// import { useForm, ValidationError } from "@formspree/react";
import {
  // FaEnvelope,
  FaWhatsapp,
  FaBookOpen,
  FaCircleInfo,
  FaPen,
  FaPaperPlane,
} from "react-icons/fa6";

const Contact = () => {
  // Form එකේ data තියාගන්න State එකක් පාවිච්චි කරනවා
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    content: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("ස්තූතියි! ඔබේ පණිවිඩය අපට ලැබුණා.");
  };

  const classContacts = [
    {
      subject: "Maths Class",
      email: "educa@maths.com",
      phone: "+941234567",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15829.740374281177!2d80.74546081165082!3d7.304917466871923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae36056422e4ef9%3A0x7c738673e83bdf0d!2sTeldeniya!5e0!3m2!1sen!2slk!4v1775619015140!5m2!1sen!2slk",
      address: "No, 123, High Level Road, Colombo.",
    },
    {
      subject: "Science Class",
      email: "educa@science.com",
      phone: "+941234567",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15829.740374281177!2d80.74546081165082!3d7.304917466871923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae36056422e4ef9%3A0x7c738673e83bdf0d!2sTeldeniya!5e0!3m2!1sen!2slk!4v1775619015140!5m2!1sen!2slk",
      address: "No, 123/1, High Level Road, Colombo.",
    },
    {
      subject: "English Class",
      email: "educa@english.com",
      phone: "+941234567",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15829.740374281177!2d80.74546081165082!3d7.304917466871923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae36056422e4ef9%3A0x7c738673e83bdf0d!2sTeldeniya!5e0!3m2!1sen!2slk!4v1775619015140!5m2!1sen!2slk",
      address: "No, 123/2, High Level Road, Colombo.",
    },
  ];

  return (
    // <section className="contact-us parts" id="contacts">
    // <section className="parts" id="contacts">
    //   <div className="contact-container">
    //     {/* Left Side: Contact Details */}
    //     <div className="contact-content contact-left" data-aos="fade-left">
    //       <h3>
    //         Get in <span>Touch</span>
    //       </h3>
    //       <p>Have questions? Our team is here to help you.</p>

    //       <div className="contact-cards">
    //         {classContacts.map((item, index) => (
    //           <div className="contact-card" key={index} data-aos="fade-up">
    //             <h4>{item.subject}</h4>
    //             <a href={`tel:${item.phone}`} className="btnx">
    //               <FaMobile className="contact-icon" /> {item.phone}
    //             </a>
    //             <a href={`mailto:${item.email}`}>
    //               <FaEnvelope className="contact-icon" /> {item.email}
    //             </a>
    //             {/* <a href="#">
    //               <FaLocationDot className="contact-icon" /> Visit Our Center
    //             </a> */}
    //             {/* <iframe
    //               src={item.mapUrl}
    //               allowFullScreen=""
    //               loading="lazy"
    //               title={item.subject}></iframe> */}

    //             <address>
    //               <GiEarthAsiaOceania className="contact-icon" />
    //               {item.address}
    //             </address>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Right Side: Contact Form */}
    //     <div
    //       className="contact-content contact-right"
    //       id="contact-form"
    //       data-aos="fade-right">
    //       <div className="form-containers">
    //         <form onSubmit={handleSubmit}>
    //           <h3>
    //             Have a Question? <span>Drop us a message</span>
    //           </h3>

    //           <label>Full Name *</label>
    //           <input
    //             type="text"
    //             name="name"
    //             placeholder="Ex: Nethmi Fernando"
    //             required
    //             onChange={handleChange}
    //           />

    //           <label>Email Address *</label>
    //           <input
    //             type="email"
    //             name="email"
    //             placeholder="name@example.com"
    //             required
    //             onChange={handleChange}
    //           />

    //           <label>Whatsapp Number</label>
    //           <input
    //             type="tel"
    //             name="mobile"
    //             placeholder="07X XXX XXXX"
    //             required
    //             onChange={handleChange}
    //           />

    //           <label>Subject</label>
    //           <select name="subject" required onChange={handleChange}>
    //             <option value="">Select Subject</option>
    //             <option value="Maths">Mathematics</option>
    //             <option value="Science">Science</option>
    //             <option value="English">English</option>
    //           </select>
    //           <label>How can we help?</label>
    //           <select name="content" required onChange={handleChange}>
    //             <option value="">Select Content</option>
    //             <option value="class">Class Information</option>
    //             <option value="documents">Study Materials</option>
    //           </select>

    //           <label>Your Message</label>
    //           <textarea
    //             name="message"
    //             rows="5"
    //             placeholder="Describe your requirement..."
    //             required
    //             onChange={handleChange}></textarea>

    //           <button
    //             type="submit"
    //             className="contact-btn"
    //             // className="browse-btn"
    //             // value="Send My Message"
    //           >
    //             Send My Message
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="contact-section section-padding" id="contacts">
      <div className="contact-container">
        <div className="contact-grid">
          {/* 1. වම් පැත්තේ විස්තර කාඩ් එක (Contact Details) */}
          <div className="contact-info-card" data-aos="fade-right">
            <h2>
              Get in <span>Touch</span>
            </h2>
            <p>
              Have questions about classes or study materials? Message the
              relevant teacher directly.
            </p>
            {/* <div className="direct-contact">
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
            </div> */}

            <div className="contact-cards">
              {classContacts.map((item, index) => (
                <div className="contact-card" key={index} data-aos="fade-up">
                  <h4>{item.subject}</h4>
                  <a href={`tel:${item.phone}`} className="btnx">
                    <FaMobile className="contact-icon" /> {item.phone}
                  </a>
                  <a href={`mailto:${item.email}`}>
                    <FaEnvelope className="contact-icon" /> {item.email}
                  </a>
                  {/* <a href="#">
                 <FaLocationDot className="contact-icon" /> Visit Our Center
               </a> */}
                  {/* <iframe
                    src={item.mapUrl}
                    allowFullScreen=""
                    loading="lazy"
                    title={item.subject}></iframe> */}
                  <address>
                    <GiEarthAsiaOceania className="contact-icon" />
                    {item.address}
                  </address>
                </div>
              ))}
            </div>
          </div>

          {/* 2. දකුණු පැත්තේ Form කාඩ් එක */}
          <div className="contact-form-card" data-aos="fade-left">
            <form
              onSubmit={handleSubmit}
              className="styled-form"
              action="https://formspree.io/f/mqenwpgk"
              method="POST">
              <div className="input-row">
                <div className="input-group">
                  <label>
                    <FaEnvelope /> Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group">
                  <label>
                    <FaWhatsapp /> Whatsapp Number
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="07X XXX XXXX"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>
                    <FaBookOpen /> Subject
                  </label>
                  <select name="subject" required onChange={handleChange}>
                    <option value="">Select Subject</option>
                    <option value="Maths">Mathematics</option>
                    <option value="Science">Science</option>
                    <option value="English">English</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>
                    <FaCircleInfo /> Inquiry Type
                  </label>
                  <select name="content" required onChange={handleChange}>
                    <option value="">Select Content</option>
                    <option value="class">Class Information</option>
                    <option value="documents">Study Materials</option>
                  </select>
                </div>
              </div>

              <div className="input-group">
                <label>
                  <FaPen /> Your Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Describe your requirement..."
                  required
                  onChange={handleChange}></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                Send My Message <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
