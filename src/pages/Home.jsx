// import { useEffect } from "react";

// import AOS from "aos";
// import "aos/dist/aos.css";

// import { FaRocket, FaArrowRight } from "react-icons/fa6";

// import heroImg from "../assets/hero-image.png";
// // import heroImg from "./assets/hero-image.png";

// import Home from "./pages/Home";
// import Resources from "./sections/Resources";
// import Classes from "./sections/Classes";
// import Teachers from "./sections/Teachers";
// import Information from "./sections/Information";
// import Testimonials from "./sections/Testimonials";
// import Contact from "./sections/Contacts";
// import Footer from "./components/Footer";

// const Hero = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   return (
//     <section id="home" className="home" data-aos="fade-up" data-aos-delay="100">
//       <div className="columns">
//         <div className="column description" data-aos="fade-right">
//           <h1>
//             Master Your Core Subjects,
//             <br />
//             <span>Ace Your Exams.</span>
//           </h1>
//           <p>
//             Simplified lessons, exam-focused strategies, and a community of
//             2500+ successful students. Join the most trusted learning platform
//             in Sri Lanka to achieve your dream 'A' grade.
//           </p>

//           <div
//             className="home-buttons"
//             data-aos="fade-right"
//             data-aos-delay="300">
//             <a href="#resources" className="start-btn">
//               Get Started Now <FaRocket />
//             </a>
//             <a href="#classes" className="browse-btn">
//               Browse classes <FaArrowRight />
//             </a>
//           </div>
//         </div>

//         <div className="column hero-img" data-aos="zoom-in">
//           <img src={heroImg} loading="lazy" alt="Master O/L with Educa" />
//         </div>
//       </div>
//     </section>

{
  /* <>
    <Home />
        <Resources />
        <Classes />
        <Teachers />
        <Information />
        <Testimonials />
        <Contact />
        </>
  );
};

export default Hero; */
}

// import React from 'react';

// Sections Import කිරීම
// Folder paths ඔයාගේ project එකේ විදිහට නිවැරදිද කියලා බලන්න
import Hero from "../sections/Hero";
import Resources from "../sections/Resources";
import Classes from "../sections/Classes";
import Teachers from "../sections/Teachers";
import Information from "../sections/Information";
// import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contacts";

const Home = () => {
  return (
    <>
      {/* Home Page එකේ සියලුම කොටස් පේළියට පෙන්වීම */}
      <Hero />
      <Resources />
      <Classes />
      <Teachers />
      <Information />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
};

export default Home;
