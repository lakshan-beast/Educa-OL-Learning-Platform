import { useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // මෙතන Router ඕනේ නෑ
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";

import Home from "./pages/Home";
import Tools from "./pages/Tools";
import DailyQuestions from "./pages/DailyQuestions";
import DailyQuizzes from "./pages/DailyQuizzes";
import PaperHub from "./pages/PaperHub";

import FullTimetable from "./pages/Timetables";
import ClassesDetails from "./pages/ClassesDetails";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Header />
      <div className="overlay"></div>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/tools" element={<Tools />} />
          <Route path="/daily-questions" element={<DailyQuestions />} />
          <Route path="/daily-quizzes" element={<DailyQuizzes />} />
          <Route path="/paper-hub" element={<PaperHub />} />

          <Route path="/full-timetable" element={<FullTimetable />} />
          <Route path="/classes-details" element={<ClassesDetails />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
