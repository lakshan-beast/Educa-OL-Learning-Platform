// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import Header from "./components/Header";

// import Home from "./pages/Home";
// import Resources from "./sections/Resources";
// import Classes from "./sections/Classes";
// import Teachers from "./sections/Teachers";
// import Information from "./sections/Information";
// import Testimonials from "./sections/Testimonials";
// import Contact from "./sections/Contacts";
// import Footer from "./components/Footer";

// // import NotFound from "./pages/NotFound";

// const App = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   return (
//     <>
//       <Header />

//       <div className="overlay"></div>

//       <main>
//         <Home />
//         <Resources />
//         <Classes />
//         <Teachers />
//         <Information />
//         <Testimonials />
//         <Contact />
//       </main>

//       <Footer />

//       {/* <NotFound /> */}
//     </>
//   );
// };

// export default App;

// import { useEffect } from "react";
// import { BrowserRouter as Routes, Route } from "react-router-dom";

// import AOS from "aos";
// import "aos/dist/aos.css";

// // Components
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// // Pages
// import Home from "./pages/Home";
// import Tools from "./pages/Tools"; // අපි හදන අලුත් Tools පේජ් එක
// import NotFound from "./pages/NotFound";

// const App = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   return (
//     <>
//       <Header />
//       <div className="overlay"></div>

//       <main>
//         <Routes>
//           {/* මුල් පිටුව (Landing Page) */}
//           <Route path="/" element={<Home />} />

//           {/* Tools පිටුව */}
//           <Route path="/tools" element={<Tools />} />

//           {/* පසුව වෙනත් පිටු ඇඩ් කිරීමට: */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </main>

//       <Footer />
//     </>
//   );
// };

// export default App;

import { useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // මෙතන Router ඕනේ නෑ
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
// import NotificationCenter from "./components/NotificationCenter";
// import NotFound from "./pages/NotFound";

// import DashboardSidebar from "./components/DashboardSidebar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import Home from "./pages/Home";
import Tools from "./pages/Tools";
import DailyQuestions from "./pages/DailyQuestions";
import DailyQuizzes from "./pages/DailyQuizzes";
import PaperHub from "./pages/PaperHub";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Header />
      {/* <NotificationCenter /> */}
      <div className="overlay"></div>

      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/dashboard-sidebar" element={<DashboardSidebar />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/daily-questions" element={<DailyQuestions />} />
          <Route path="/daily-quizzes" element={<DailyQuizzes />} />
          <Route path="/paper-hub" element={<PaperHub />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
