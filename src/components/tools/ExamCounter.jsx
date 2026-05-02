import { useState, useEffect } from "react";
import { FaCalendarDay } from "react-icons/fa6";

const ExamCountdown = () => {
  // මෙතනට ඔයාට අවශ්‍ය විභාග දිනය ඇතුළත් කරන්න (YYYY-MM-DD format)
  const examDate = new Date("2026-12-01T08:30:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = examDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [examDate]);

  return (
    <div className="card-container countdown-tool" data-aos="fade-up">
      <h1>O/L Exam Countdown</h1>

      <div className="countdown-display">
        <div className="time-block">
          <span className="time-value">{timeLeft.days}</span>
          <p>Days</p>
        </div>
        <div className="time-block">
          <span className="time-value">{timeLeft.hours}</span>
          <p>Hours</p>
        </div>
        <div className="time-block">
          <span className="time-value">{timeLeft.minutes}</span>
          <p>Mins</p>
        </div>
        <div className="time-block">
          <span className="time-value">{timeLeft.seconds}</span>
          <p>Secs</p>
        </div>
      </div>
      <p className="exam-note">
        <FaCalendarDay /> Target Date: Dec 01, 2026
      </p>
    </div>
  );
};

export default ExamCountdown;
