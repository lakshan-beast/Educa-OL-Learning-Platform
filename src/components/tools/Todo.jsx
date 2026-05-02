// import { useState, useEffect } from "react";
// import { FaSquarePlus, FaTrashCan } from "react-icons/fa6";

// const Todo = () => {
//   const [tasks, setTasks] = useState([]); // සියලුම tasks
//   const [inputValue, setInputValue] = useState(""); // Input එකේ ටයිප් කරන දේ
//   const [timeLeft, setTimeLeft] = useState(""); // Countdown එක සඳහා

//   // 1. Task එකක් ඇතුළත් කිරීම (Add Task)
//   const handleAddTask = () => {
//     if (inputValue.trim() === "") return;
//     const newTask = { id: Date.now(), text: inputValue, completed: false };
//     setTasks([...tasks, newTask]);
//     setInputValue("");
//   };

//   // 2. Task එකක් මැකීම (Delete Task)
//   const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   // 3. Task එකක් සම්පූර්ණ කිරීම (Toggle Complete)
//   const toggleComplete = (id) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task,
//       ),
//     );
//   };

//   // 4. Countdown Logic (Daily Mission එක සඳහා)
//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date();
//       const endOfDay = new Date();
//       endOfDay.setHours(23, 59, 59);

//       const diff = endOfDay - now;
//       const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//       const minutes = Math.floor((diff / (1000 * 60)) % 60);
//       const seconds = Math.floor((diff / 1000) % 60);

//       setTimeLeft(
//         `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`,
//       );
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="todo-tool-wrapper">
//       {/* Todo Input Card */}
//       <div className="card-container" data-aos="fade-up">
//         <h1>Your To Do List</h1>
//         <div className="card-content">
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             placeholder="Add new task here.."
//           />
//           <button className="addBtn" onClick={handleAddTask} title="Add new">
//             <FaSquarePlus />
//           </button>
//         </div>
//       </div>

//       {/* Daily Mission Card */}
//       <div className="card-container" data-aos="fade-up">
//         <div className="task-header">
//           <h3>Daily Mission</h3>
//           <div className="task-timer">
//             <p>
//               Time left for Day: <span>{timeLeft}</span>
//             </p>
//           </div>
//         </div>

//         <div className="task-list">
//           {tasks.map((task) => (
//             <div key={task.id} className="task-item">
//               <input
//                 type="checkbox"
//                 checked={task.completed}
//                 onChange={() => toggleComplete(task.id)}
//               />
//               <label
//                 style={{
//                   textDecoration: task.completed ? "line-through" : "none",
//                 }}>
//                 {task.text}
//               </label>
//               <FaTrashCan
//                 onClick={() => deleteTask(task.id)}
//                 style={{ cursor: "pointer", color: "red", marginLeft: "auto" }}
//               />
//             </div>
//           ))}

//           {tasks.length === 0 && (
//             <p className="empty-msg">No tasks for today!</p>
//           )}
//           <span id="task-counter">
//             {tasks.filter((t) => t.completed).length} / {tasks.length} Completed
//           </span>
//         </div>

//         {tasks.length > 0 && tasks.every((t) => t.completed) && (
//           <div id="congrats-msg">Day Completed! Get some rest 🏆</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Todo;

import { useState, useEffect } from "react";
import {
  FaSquarePlus,
  FaTrashCan,
  FaCheck,
  //   FaCircleCheck,
} from "react-icons/fa6";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [timeLeft, setTimeLeft] = useState("00:00:00");
  const [toast, setToast] = useState("");

  // 1. Toast පණිවිඩ පෙන්වීම (Show Toast Logic)
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // 2. Countdown Logic (updateCountDown logic එකමයි)
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      const diff = endOfDay - now;

      if (diff > 0) {
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24)
          .toString()
          .padStart(2, "0");
        const m = Math.floor((diff / (1000 * 60)) % 60)
          .toString()
          .padStart(2, "0");
        const s = Math.floor((diff / 1000) % 60)
          .toString()
          .padStart(2, "0");
        setTimeLeft(`${h}:${m}:${s}`);
      } else {
        setTimeLeft("Time Expired");
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 3. Task එකක් එකතු කිරීම (addTask function එක)
  const handleAddTask = () => {
    if (inputValue.trim() === "") return;

    // උපරිම Task 5 සීමාව (Your logic: currentTask >= 5)
    if (tasks.length >= 5) {
      setToast("Maximum 5 Tasks Allowed!");
      return;
    }

    setTasks([
      ...tasks,
      { id: Date.now(), text: inputValue, completed: false },
    ]);
    setInputValue("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const removeTask = (id) => {
    if (window.confirm("Are you Sure?")) {
      // Your confirm logic
      setTasks(tasks.filter((t) => t.id !== id));
    }
  };

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="todo-section">
      {/* Toast Notification */}
      {toast && <div className="toast-container active">{toast}</div>}
      <div className="card-container" data-aos="fade-up">
        <h1>Your To Do List</h1>

        <div className="todo-input">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add new task here.."
          />
          <button onClick={handleAddTask} id="addBtn">
            <FaSquarePlus />
          </button>
        </div>

        <div className="task-list">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`task-item ${task.completed ? "completed" : ""}`}>
              <h2
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  opacity: task.completed ? 0.5 : 1,
                }}>
                {task.text}
              </h2>
              <div className="task-btns">
                <button
                  onClick={() => toggleTask(task.id)}
                  className="done-btn">
                  <FaCheck />
                </button>
                <button
                  onClick={() => removeTask(task.id)}
                  className="delete-btn">
                  <FaTrashCan />
                </button>
              </div>
            </div>
          ))}

          <span id="task-counter">
            Completed: {completedCount}/{tasks.length}
          </span>
        </div>

        {/* <div className="card-container" data-aos="fade-up"> */}
        <div className="task-header">
          <h3>Daily Mission</h3>
          <div className="task-timer">
            <p>
              Time left: <span id="countdown">{timeLeft}</span>
            </p>
          </div>
        </div>
        {/* </div> */}

        {/* Congrats Message */}
        {tasks.length > 0 && completedCount === tasks.length && (
          <div id="congrats-msg">Day Completed! Get some rest 🏆</div>
        )}
      </div>
    </div>
  );
};

export default Todo;
