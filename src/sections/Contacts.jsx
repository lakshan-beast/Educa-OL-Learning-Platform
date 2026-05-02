import { useState } from "react";
import { FaMobile, FaEnvelope, FaLocationDot } from "react-icons/fa6";

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
    <section className="contact-us parts" id="contacts">
      <div className="contact-container">
        {/* Left Side: Contact Details */}
        <div className="contact-content contact-left" data-aos="fade-left">
          <h3>
            Get in <span>Touch</span>
          </h3>
          <p>Have questions? Our team is here to help you.</p>

          <div className="class-details">
            {classContacts.map((item, index) => (
              <div className="class-contacts" key={index} data-aos="fade-up">
                <h4>{item.subject}</h4>
                <a href={`tel:${item.phone}`} className="btnx">
                  <FaMobile /> {item.phone}
                </a>
                <a href={`mailto:${item.email}`}>
                  <FaEnvelope /> {item.email}
                </a>
                <a href="#">
                  <FaLocationDot /> Visit Our Center
                </a>
                <iframe
                  src={item.mapUrl}
                  allowFullScreen=""
                  loading="lazy"
                  title={item.subject}></iframe>
                <address>{item.address}</address>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="contact-content contact-right" data-aos="fade-right">
          <div className="form-containers">
            <h3>
              Have a Question? <span>Drop us a message</span>
            </h3>
            <form onSubmit={handleSubmit}>
              <label>Full Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Ex: Nethmi Fernando"
                required
                onChange={handleChange}
              />

              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                required
                onChange={handleChange}
              />

              <label>Whatsapp Number</label>
              <input
                type="tel"
                name="mobile"
                placeholder="07X XXX XXXX"
                required
                onChange={handleChange}
              />

              <label>Subject</label>
              <select name="subject" required onChange={handleChange}>
                <option value="">Select Subject</option>
                <option value="Maths">Mathematics</option>
                <option value="Science">Science</option>
                <option value="English">English</option>
              </select>
              <label>How can we help?</label>
              <select name="content" required onChange={handleChange}>
                <option value="">Select Content</option>
                <option value="class">Class Information</option>
                <option value="documents">Study Materials</option>
              </select>

              <label>Your Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Describe your requirement..."
                required
                onChange={handleChange}></textarea>

              <input
                type="submit"
                className="contact-btn"
                value="Send My Message"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
