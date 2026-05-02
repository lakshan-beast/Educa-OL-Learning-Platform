import Todo from "../components/tools/Todo";
import Calculator from "../components/tools/Calculator";
import Pomodoro from "../components/tools/Pomodoro";
import UnitConverter from "../components/tools/UnitConverter";
import GradeCalculator from "../components/tools/GradeCalculator";
import Motivation from "../components/tools/Motivation";
import ExamCountdown from "../components/tools/ExamCounter";

const Tools = () => {
  return (
    <div className="tools-page">
      <main className="system-container" style={{ marginTop: "100px" }}>
        <h2>
          Educa <span>Smart Tools</span>
        </h2>

        <div className="tools-grid">
          <ExamCountdown />
          <Motivation />
          <Todo />
          <Calculator />
          <Pomodoro />
          <UnitConverter />
          <GradeCalculator />
        </div>
      </main>
    </div>
  );
};

export default Tools;
