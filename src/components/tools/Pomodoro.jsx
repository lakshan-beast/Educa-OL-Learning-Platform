import { useState, useEffect } from "react";
import { FaPlay, FaPause, FaRotateLeft } from "react-icons/fa6";

const Pomodoro = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          // Timer එක ඉවර වුණාම
          setIsActive(false);
          alert("Time's up! Take a break. ☕");
          clearInterval(interval);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds, minutes]);

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
  };

  return (
    <div className="card-container pomodoro-tool" data-aos="fade-up">
      <h1>Pomodoro Timer</h1>
      <div className="timer-display">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </div>

      <div className="timer-controls">
        <button onClick={() => setIsActive(!isActive)} className="start-btn">
          {isActive ? <FaPause /> : <FaPlay />} {isActive ? "Pause" : "Start"}
        </button>
        <button onClick={resetTimer} className="browse-btn">
          <FaRotateLeft /> Reset
        </button>
      </div>
      <p className="timer-note">Stay focused for 25 minutes!</p>
    </div>
  );
};

export default Pomodoro;
