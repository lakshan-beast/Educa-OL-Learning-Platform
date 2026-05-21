import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import NotFound from "./pages/NotFound";

import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";

import Home from "./pages/Home";
import Tools from "./pages/Tools";
import DailyQuestions from "./pages/DailyQuestions";
import DailyQuizzes from "./pages/DailyQuizzes";
import PaperHub from "./pages/PaperHub";

import FullTimetable from "./pages/Timetables";
import ClassesDetails from "./pages/ClassesDetails";
import ParentPortal from "./pages/ParentPortal";

import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Header />
      {/* <div className="login-overlay"></div> */}
      <div className="overlay"></div>

      <main>
        <Routes>
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />

          <Route path="/admin/:subject" element={<AdminDashboard />} />

          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/tools" element={<Tools />} />
          <Route path="/daily-questions" element={<DailyQuestions />} />
          <Route path="/daily-quizzes" element={<DailyQuizzes />} />
          <Route path="/paper-hub/:id" element={<PaperHub />} />

          <Route path="/full-timetable" element={<FullTimetable />} />
          <Route path="/classes-details" element={<ClassesDetails />} />
          <Route path="/parent-portal" element={<ParentPortal />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
